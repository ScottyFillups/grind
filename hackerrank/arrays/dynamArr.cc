#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int N, Q, lastAnswer;
    
    cin >> N >> Q;
    lastAnswer = 0;
    vector< vector<int> > seqs(N);
    
    for (int i = 0; i < Q; i++) {
        int type, x, y;
        cin >> type >> x >> y;
        if (type == 1) {
            seqs[(x ^ lastAnswer) % N].push_back(y);
        } else {
            vector<int> seq = seqs[(x ^ lastAnswer) % N];
            lastAnswer = seq[y % seq.size()];
            cout << lastAnswer << endl;
        }
    }
    return 0;
}
