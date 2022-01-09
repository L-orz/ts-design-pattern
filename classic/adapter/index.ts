/**
 * 适配器模式
 *
 * 适配器是一种结构型设计模式，它能使不兼容的对象能够相互合作。
 * 适配器可担任两个对象间的封装器，它会接收对于一个对象的调用，并将其转换为另一个对象可识别的格式和接口。
 */

// 客户端需要的接口
interface Car {
  drive(): void
}

// 被适配者
class GasolineMotor {
  gasonlineDrive() {
    console.log('汽油驱动')
  }
}
class ElectricMotor {
  electricDrive() {
    console.log('电驱动')
  }
}

// 适配器
class GasolineCarAdapter implements Car {
  private gasolineMotor: GasolineMotor

  constructor(_gasolineMotor?: GasolineMotor) {
    this.gasolineMotor = _gasolineMotor ?? new GasolineMotor()
  }

  drive() {
    this.gasolineMotor.gasonlineDrive()
  }
}
class ElectricCarAdapter implements Car {
  private electricMotor: ElectricMotor

  constructor(_electricMotor?: ElectricMotor) {
    this.electricMotor = _electricMotor ?? new ElectricMotor()
  }

  drive() {
    this.electricMotor.electricDrive()
  }
}

export {}

/**
 * 测试
 */
const car1 = new GasolineCarAdapter()
car1.drive()
const car2 = new ElectricCarAdapter()
car2.drive()
