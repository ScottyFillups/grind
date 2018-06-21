#include <iostream>

class copy {
  private:
    int *a_;

  public:
    copy(int a) {
      a_ = new int(a);
    }
    ~copy() {
      delete a_;
    }
    copy(const copy &cp) {
      std::cout << "Copy constructor called" << std::endl;

      a_ = new int(cp.a());
    }
    copy& operator=(copy rhs) {
      std::cout << "Copy assignment called" << std::endl;

      swap(*this, rhs);

      return *this;
    }

    friend void swap(copy &first, copy &second) {
      std::swap(first.a_, second.a_);
    }
    int a() const {
      return *a_;
    }
};

copy mirror(copy a) {
  return a;
}

int main() {
  copy a(1);
  copy b(2);

  copy c = a;
  copy d(b);
  b = a;
  a = mirror(a);

  std::cout << a.a() << std::endl; // 1
  std::cout << b.a() << std::endl; // 1
  std::cout << c.a() << std::endl; // 1
  std::cout << d.a() << std::endl; // 2

  return 0;
}
