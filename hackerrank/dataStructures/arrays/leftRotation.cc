#include <bits/stdc++.h>

using namespace std;

vector <int> leftRotation(vector <int> a, int d) {
    vector<int>::const_iterator start = (a.begin() + d % a.size());
    vector<int>::const_iterator end = a.end();
    vector<int> b(start, end);
    b.insert(b.end(), a.begin(), (a.begin() + d % a.size()));
    return b;
}

int main() {
    int n;
    int d;
    cin >> n >> d;
    vector<int> a(n);
    for(int a_i = 0; a_i < n; a_i++){
       cin >> a[a_i];
    }
    vector <int> result = leftRotation(a, d);
    for (ssize_t i = 0; i < result.size(); i++) {
        cout << result[i] << (i != result.size() - 1 ? " " : "");
    }
    cout << endl;


    return 0;
}
