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
int main() {
    string s;
    string msg = "pangram";
    array<int, 26> occ = {0};
    
    getline(cin, s);
    for (char c : s) {
        int i = tolower(c) - 'a';
        if (i >= 0 && i < 26) {
            occ[i]++;
        }
    }
    for (int c : occ) {
        if (c == 0) {
            msg = "not pangram";
        }
    }
    cout << msg << endl;
    
    return 0;
}
