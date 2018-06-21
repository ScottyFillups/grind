#include <iostream>
#include "singleton.h"

using namespace std;

void foo() {
  cout << God::instance()->answer() << endl;
}

int main() {
  cout << God::instance()->answer() << endl;

  foo();

  return 0;
}
