#include "Restaurant.h"

std::string Restaurant::getSpecial() const {
  std::string msg = "The special is ";
  msg += specialName();
  msg += ", and costs ";
  msg += std::to_string(specialCost());

  return msg;
}

std::string SwissChalet::specialName() const {
  return "chicken";
}
float SwissChalet::specialCost() const {
  return 14.99;
}

std::string RedLobster::specialName() const {
  return "lobster";
}
float RedLobster::specialCost() const {
  return 20.99;
}
