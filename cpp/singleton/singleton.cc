#include "singleton.h"

God* God::pInstance_ = nullptr;

God::God() {}
God::~God() {
  delete pInstance_;
}
God* God::instance() {
  if (pInstance_ == nullptr) {
    pInstance_ = new God();
  }

  return pInstance_;
}
int God::answer() const {
  return 42;
}
