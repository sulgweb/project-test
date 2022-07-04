/*
 * @Author: xiaoyu
 * @Description: worker 线程
 * @Date: 2022-05-08 08:41:30
 * @LastEditors: xiaoyu
 * @LastEditTime: 2022-06-29 23:17:44
 */

// 方法对象
const funcObj = {
  fb: (n) => {
    if (n === 1 || n === 2) {
      return 1;
    }
    return funcObj.fb(n - 1) + funcObj.fb(n - 2);
  },
};

// onmessage事件
onmessage = function (e) {
  const { data } = e;
  const res = funcObj[data.function](data.data);

  // 将获取的数据通过postMessage发送到主线程
  self.postMessage({
    data: res,
    name: "worker test",
  });
  self.close();
};
