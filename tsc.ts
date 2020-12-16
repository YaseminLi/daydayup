interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date//实现实例属性
  setTime(d: Date) {//实现实例方法
    this.currentTime = d
  }
  constructor(h: number, m: number) { }
}