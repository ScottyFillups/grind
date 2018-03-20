#include <node.h>

namespace module {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::Number;
  using v8::Value;

  void Double(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(Number::New(isolate, args[0]->NumberValue() * 2));
  }

  void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "calc", Double);
  }

  NODE_MODULE(NODE_GYP_MODULE_NAME, init)
}
