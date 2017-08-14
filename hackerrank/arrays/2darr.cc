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

int getSum(vector< vector<int> > &a, int hglass_width, int hglass_height, int grid_width, int grid_height) {
    int max = -100;
    
    for (int i = 0; i < (grid_width - hglass_width + 1); i++) {
        for (int j = 0; j < (grid_height - hglass_height + 1); j++) {
            int sum = a[i][j] + a[i][j+1] + a[i][j+2] + a[i+1][j+1] + a[i+2][j] + a[i+2][j+1] + a[i+2][j+2];
            max = (sum > max) ? sum : max;
        }
    }
    
    return max;
}

int main(){
    vector< vector<int> > arr(6,vector<int>(6));
    for(int arr_i = 0;arr_i < 6;arr_i++){
       for(int arr_j = 0;arr_j < 6;arr_j++){
         //pay attention to the way input is received
          cin >> arr[arr_i][arr_j];
       }
    }
    cout << getSum(arr, 3, 3, arr[0].size(), arr[1].size()) << endl;
    return 0;
}
