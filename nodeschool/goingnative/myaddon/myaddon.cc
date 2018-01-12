#include <node.h>
#include <iostream>

using namespace v8;

void Method(const FunctionCallbackInfo<Value>& args) {
  std::cout << "I am a native addon and I AM ALIVE!" << std::endl;
}

void init(Local<Object> exports) {
  NODE_SET_METHOD(exports, "print", Method);
}

NODE_MODULE(NODE_GYP_MODULE_NAME, init)
