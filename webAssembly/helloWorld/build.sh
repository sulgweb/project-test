#! /bin/bash
###
 # @Description: 
 # @Author: xianpengfei
 # @LastEditors: xianpengfei
 # @Date: 2022-07-01 10:43:35
 # @LastEditTime: 2022-07-04 20:05:38
### 
dir="./build"
fileName="index.wasm"
templatePath="./template/shell_minimal.html"
if [ ! -d "$dir" ]; then
  mkdir $dir
else
  rm -rf $dir
  mkdir $dir
fi
buildPath=`expr $dir"/"$fileName`
echo $buildPath
# emcc ./index.c -s \
#       -s WASM=1 \
#       -O1 \
#       -s MODULARIZE=1 \
#       -s EXPORT_ES6=1 \
#       -s "EXPORTED_RUNTIME_METHODS=['ccall','cwrap']" \
#       -s "ENVIRONMENT='web'" \
#       -o $buildPath

emcc  ./index.c \
      -O1 \
      -s WASM=1 \
      --shell-file $templatePath \
      -o $buildPath