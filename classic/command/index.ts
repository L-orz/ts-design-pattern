/**
 * 命令模式
 *
 * 命令模式是一种行为设计模式，它可将请求转换为一个包含与请求相关的所有信息的独立对象。
 * 该转换让你能根据不同的请求将方法参数化、延迟请求执行或将其放入队列中，且能实现可撤销操作
 */

// 命令接受者
class Cook {
  bakeMutton() {
    console.log('烤羊肉')
  }

  bakeChickenWing() {
    console.log('烤鸡翅')
  }
}

// 命令抽象类
abstract class CookingCommand {
  protected cook: Cook

  constructor(cook: Cook) {
    this.cook = cook
  }

  abstract execute(): void
}

// 命令的具体实现
class BakeMuttonCommand extends CookingCommand {
  execute() {
    this.cook.bakeMutton()
  }
}

class BakeChickenWingCommand extends CookingCommand {
  execute() {
    this.cook.bakeChickenWing()
  }
}

// 调用者
class Waiter {
  private commands: CookingCommand[] = []

  setOrder(command: CookingCommand) {
    this.commands.push(command)
  }

  notify() {
    this.commands.forEach((command) => {
      command.execute()
    })
  }
}

export {}

/**
 * 测试
 */
const cook = new Cook()
const waiter = new Waiter()

waiter.setOrder(new BakeMuttonCommand(cook))
waiter.setOrder(new BakeChickenWingCommand(cook))
waiter.setOrder(new BakeChickenWingCommand(cook))

waiter.notify()
