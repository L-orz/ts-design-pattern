/**
 * 状态模式
 *
 * 与策略模式非常相似，最大区别在于，状态模式会将环境(context)保存在状态(state)内，
 * state 在执行完某个动作后，可以直接通过保存的 context 修改当前状态
 * 从而实现了内部状态流转
 */
export class Context {
  private state: State

  constructor(_state: State) {
    this.transformTo(_state)
  }

  transformTo(_state: State) {
    this.state = _state
    this.state.setContext(this)
  }

  work() {
    this.state.handleWork()
  }

  play() {
    this.state.handlePlay()
  }
}

abstract class State {
  context: Context

  setContext(_context: Context) {
    this.context = _context
  }

  abstract handleWork()
  abstract handlePlay()
}

export class HappyState extends State {
  handleWork() {
    console.log('Work work work!')
    this.context.transformTo(new SadState())
  }
  handlePlay() {
    console.log('Yeah! Play until midnight!')
  }
}

export class SadState extends State {
  handleWork() {
    console.log(`Don't urge me!`)
  }
  handlePlay() {
    console.log(`Play!`)
    this.context.transformTo(new HappyState())
  }
}

/**
 * 测试
 */
function test() {
  const context = new Context(new SadState())
  context.work()
  context.work()
  context.work()

  context.play()
  context.play()
  context.play()

  context.work()
  context.work()
  context.work()
}
test()
