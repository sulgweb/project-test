/*
 * @Author: xiaoyu
 * @Description: 
 * @Date: 2022-07-02 00:18:36
 * @LastEditors: xiaoyu
 * @LastEditTime: 2022-07-02 12:44:42
 */
import React from 'react'

export default function WebWorkerTest() {
  const handleClick = () => {
    const number = 1
    const workerList = []
    console.log('%c 开始多线程测试 ', 'color:#fff; background:#00897b ')
    for (let i = 0; i < number; i++) {
      const workerItem = new Promise((resolve, reject) => {
        const myWorker = new Worker(new URL('../utils/fb.worker.ts', import.meta.url))
        myWorker.postMessage({
          function: 'fb',
          data: 43
        })
        myWorker.onmessage = (e) => {
          resolve(e.data)
          // 关闭worker线程
          myWorker.terminate()
        }
      })
      workerList.push(workerItem)
    }
    console.time('worker多线程执行时间')
    Promise.all(workerList).then(res => {
      console.log(res)
      console.timeEnd('worker多线程执行时间')
    })
  }

  return (
    <>
      <button onClick={handleClick}>vite/webpack5</button>
    </>
  )
}
