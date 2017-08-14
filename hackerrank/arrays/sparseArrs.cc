#include <cmath>
#include <cstdio>
#include <vector>
#include <string>
#include <unordered_map>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    unordered_map<string, int> strs;
    int N, Q;
    
    cin >> N;
    for (int i = 0; i < N; i++) {
        string temp;
        cin >> temp;
        strs[temp]++;
    }
    
    cin >> Q;
    for (int i = 0; i < Q; i++) {
        string temp;
        cin >> temp;
        cout << strs[temp] << endl;
    }
    
    return 0;
}
