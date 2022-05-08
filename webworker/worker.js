// worker 线程

const funcObj = {
  fb: (n) => {
    if(n===1 || n ===2){
      return 1;
    }
    return funcObj.fb(n-1) + funcObj.fb(n-2)
  }
}


onmessage = function(e){
  const {data} = e;
  
  const res = funcObj[data.function](data.data)
  
  self.postMessage({
    data: res,
    name: 'worker test'
  })
  self.close()
}