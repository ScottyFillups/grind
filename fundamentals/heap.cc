#include <iostream>
#include <vector>

using namespace std;

class MinHeap {
  public:
    MinHeap();
    void insert(int val);
    void print() const;
  private:
    void swap(int i, int j);
    void rearrange();
    vector<int> data;
};
MinHeap::MinHeap() : data(1, 0) {}
void MinHeap::swap(int i, int j) {
  int temp = data[i];
  data[i] = data[j];
  data[j] = temp;
}
void MinHeap::rearrange() {
  int i = data.size() - 1;
  while (i) {
    if (data[i] < data[i/2]) {
      swap(i, i/2);
    }
    i /= 2;
  }
}
void MinHeap::insert(int val) {
  data.push_back(val);
  rearrange();
}
void MinHeap::print() const {
  for (int val : data) { cout << val << endl; }
}

int main() {
  MinHeap a;
  a.insert(5);
  a.insert(2);
  a.insert(8);
  a.insert(10);
  a.insert(1);
  a.print();
  return 0;
}
