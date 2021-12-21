/**
 * 策略模式
 *
 * 策略是一种行为设计模式，它将一组行为转换为对象，并使其在原始上下文对象内部能够相互替换。
 * 与状态模式相似，但是策略模式的策略选择是由外部传入的，无法在内部自己改变。详情可见状态模式例子。
 */

export class Context {
  private strategy: RouteStrategy

  constructor(_stragegy: RouteStrategy) {
    this.setRouteStrategy(_stragegy)
  }

  setRouteStrategy(_stragegy: RouteStrategy) {
    this.strategy = _stragegy
  }

  execute(routes: string[]): string {
    return this.strategy.generateRoute(routes)
  }
}

interface RouteStrategy {
  generateRoute(routes: string[]): string
}

export class NormalRouteStrategy implements RouteStrategy {
  generateRoute(routes: string[]) {
    return routes.join(' -> ')
  }
}

export class ReverseRouteStrategy implements RouteStrategy {
  generateRoute(routes: string[]) {
    return routes.reverse().join(' -> ')
  }
}

/**
 * 测试
 */
const ROUTES = ['A', 'B', 'C', 'D', 'E']

const context = new Context(new NormalRouteStrategy())
console.log(context.execute(ROUTES))
context.setRouteStrategy(new ReverseRouteStrategy())
console.log(context.execute(ROUTES))
