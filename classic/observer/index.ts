/**
 * 观察者模式
 *
 * 观察者是一种行为设计模式，允许一个对象将其状态的改变通知其他对象。
 * 与订阅发布的区别在于，订阅发布有一个中心的事件管理者（EventManager），所以订阅发布模式中，订阅者与发布者不需要感知对方存在。
 * 而观察者模式没有中心管理者，每一个被观察者（Subject）都保存着观察者（Observer）。
 * 实际开发中，应当根据业务场景进行选择。业务场景中，使用订阅发布模式的 EventBus 会被更多的使用。
 */
interface Observer {
  update(): void
}

// 被观察者
abstract class Subject {
  // 保存观察者列表
  private observers: Observer[] = []

  // 绑定观察者
  attach(observer: Observer) {
    this.observers.push(observer)
  }

  // 解绑观察者
  detach(observer: Observer) {
    this.observers = this.observers.filter((item) => item !== observer)
  }

  // 通知观察者
  notify() {
    this.observers.forEach((observer) => observer.update())
  }
}

class TeslaPresell extends Subject {
  presell() {
    console.log('特斯拉正在预售中~')
    this.notify()
  }
}

class Customer implements Observer {
  private name: string

  constructor(_name: string) {
    this.name = _name
  }

  update() {
    console.log(`${this.name} 接收到预售通知`)
  }
}

/**
 * 测试
 */
const zhangsan = new Customer('张三')
const tesla4S = new TeslaPresell()

tesla4S.attach(zhangsan)
tesla4S.presell()
tesla4S.detach(zhangsan)
tesla4S.presell()
