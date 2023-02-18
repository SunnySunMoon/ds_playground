import { queueTest } from "./queue.js"

console.log('>>> load main.js')

export function test(): void {
  queueTest()
}

test()
