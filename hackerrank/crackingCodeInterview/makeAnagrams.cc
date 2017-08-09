#include <map>
#include <set>
#include <list>
#include <cmath>
#include <ctime>
#include <deque>
#include <queue>
#include <stack>
#include <string>
#include <bitset>
#include <cstdio>
#include <limits>
#include <vector>
#include <climits>
#include <cstring>
#include <cstdlib>
#include <fstream>
#include <numeric>
#include <sstream>
#include <iostream>
#include <algorithm>
#include <unordered_map>

using namespace std;

int number_needed(string a, string b) {
    int a_c[26] = {0};
    int b_c[26] = {0};
    int dels = 0;
    for (int i = 0; i < a.length(); i++) {
        a_c[a[i]-'a']++;
    }
    for (int i = 0; i < b.length(); i++) {
        b_c[b[i]-'a']++;
    }
    for (int i = 0; i < 26; i++) {
        dels += abs(a_c[i] - b_c[i]);
    }
    return dels;
}

int main(){
    string a;
    cin >> a;
    string b;
    cin >> b;
    cout << number_needed(a, b) << endl;
    return 0;
}
