interface QueueProps<T> {
  list: T[]
}

/**
 * Simple Queue
 */
export default class Queue<T> {
  private list: T[] = []
  public length = 0
  constructor(props: QueueProps<T>) {
    this.list = props.list
    this.length = props.list.length
  }
  
  /**
   * Join the queue
   * @param items the objects will join the queue 
   * @returns the new length after items joined the queue
   */
  public in<S extends T>(...items: S[]): number {
    this.list.push(...items)
    this.length = this.list.length
    return this.length
  }

  /**
   * Out of the queue
   * @param num how many objects need to be out
   * @returns the objects out of the queue
   */
  public out(num: number): T[] {
    const res: T[] = []
    for (let i = 0; i < num; i++) {
      if (this.list.length > 0) {
        res.push(this.list.shift())
      } else {
        break
      }
    }
    this.length = this.list.length
    return res
  }
}

export const queueTest = (): void => {
  console.log('>>> load test')
  const simpleQueue = new Queue<string>({ list: ['dx', 'dl', 'cxs', 'drp', 'xhm', 'lzy', 'yyx', ] })
  console.log('>>> simple queue: ', simpleQueue)
  console.log('>>> in: ', simpleQueue.in('wm', 'csq'))
  console.log('>>> out: ', simpleQueue.out(2))
  console.log('>>> queue length: ', simpleQueue.length, simpleQueue)

  const numberQueue = new Queue<number>({list: [1, 2]})
  console.log('>>> number queue: ', numberQueue)
  console.log('>>> out: ', numberQueue.out(4))
  console.log('>>> number queue: ', numberQueue.length, numberQueue)
}