/**
 * 装饰器模式
 *
 * 装饰模式是一种结构型设计模式，允许你通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为。
 */

// Car 接口
interface Car {
  run(): void
}

// Car 实现
class BmwCar implements Car {
  run() {
    console.log('BMW run.')
  }
}
class TeslaCar implements Car {
  run() {
    console.log('Tesla run.')
  }
}

// 装饰器抽象类
class CarDecorator implements Car {
  protected car: Car

  constructor(_car: Car) {
    this.car = _car
  }

  run() {
    this.car.run()
  }
}

// 装饰器实现
class AutoRunCarDecorator extends CarDecorator {
  autoRun() {
    console.log('Atuo run.')
  }

  run() {
    this.car.run()
    this.autoRun()
  }
}

export {}

/**
 * 测试
 */
const bmw = new BmwCar()
const tesla = new TeslaCar()

// 装饰器可以多次叠加
// e.g.
// new HighSpeedCarDecorator(new AutoRunCarDecorator(new TeslaCar()))
const autoBmw = new AutoRunCarDecorator(bmw)
autoBmw.run()
const autoTesla = new AutoRunCarDecorator(tesla)
autoTesla.run()
