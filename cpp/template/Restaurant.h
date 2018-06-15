#include <string>

class Restaurant {
  public:
    std::string getSpecial() const;

  private:
    virtual std::string specialName() const = 0;
    virtual float specialCost() const = 0;
};

class SwissChalet : public Restaurant {
  private:
    std::string specialName() const override;
    float specialCost() const override;
};

class RedLobster : public Restaurant {
  private:
    std::string specialName() const override;
    float specialCost() const override;
};
