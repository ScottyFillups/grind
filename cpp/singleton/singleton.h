#ifndef SINGLETON_H
#define SINGLETON_H

class God {
  private:
    God();
    static God* pInstance_;
  public:
    ~God();
    static God* instance();
    int answer() const;
    God(const God&) = delete;
    God& operator=(const God&) = delete;
};

#endif
