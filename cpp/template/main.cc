#include <iostream>
#include "Restaurant.h"

int main() {
  Restaurant *a = new RedLobster();
  Restaurant *b = new SwissChalet();

  std::cout << a->getSpecial() << std::endl;
  std::cout << b->getSpecial() << std::endl;

  return 0;
}
