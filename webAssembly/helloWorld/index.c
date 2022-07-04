/*
 * @Description: 
 * @Author: xianpengfei
 * @LastEditors: xianpengfei
 * @Date: 2022-07-01 10:38:02
 * @LastEditTime: 2022-07-01 12:29:47
 */
#include <stdio.h>
#include <emscripten/emscripten.h>

int main(int argc, char ** argv) {
    printf("Hello World\n");
}

int EMSCRIPTEN_KEEPALIVE myFunction(int argc, char ** argv) {
  printf("this is myFunction\n");
}

int EMSCRIPTEN_KEEPALIVE fb(int n){
  printf("输入的参数：%d \n", n);
  if (n <= 0)
    return 0;
  else if (n == 1)
    return 1;
  else
    return fb(n - 1) + fb(n - 2);
}

int EMSCRIPTEN_KEEPALIVE add(int a, int b) {
  return a+b;
}