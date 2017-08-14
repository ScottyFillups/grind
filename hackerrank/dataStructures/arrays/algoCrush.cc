#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n, m, max, acc;
    cin >> n >> m;
    acc = max = 0;
    vector<int> v(n, 0);
    
    for (int i = 0; i < m; i++) {
        int a, b, k;
        cin >> a >> b >> k;
        v[a-1] += k;
        v[b] -= k;
    }
    for (auto c : v) {
        acc += c;
        max = acc > max ? acc : max;
    }
    cout << max << endl;
    
    return 0;
}
