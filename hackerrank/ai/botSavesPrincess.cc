// Solution if the input was given as a single string, and not a vector of strings

#include <iostream>
#include <vector>
#include <cmath>
#include <string>
using namespace std;
void displayPathtoPrincess(int n, string grid) {
    string vertStr, horiStr;
    int p, m, vert, hori;
    for (int i = 0; i < grid.size(); i++) {
        m = grid[i] == 'm' ? i : m;
        p = grid[i] == 'p' ? i : p;
    }
    
    // define +ve as up & left
    vert = m / n - p / n;
    hori = m % n - p % n;
    vertStr = vert > 0 ? "UP" : "DOWN";
    horiStr = hori > 0 ? "LEFT" : "RIGHT";
    
    for (int i = 0; i < abs(vert); i++) { cout << vertStr << endl; }
    for (int i = 0; i < abs(hori); i++) { cout << horiStr << endl; }
}
int main(void) {

    int m;
    string grid = "";

    cin >> m;

    for(int i=0; i<m; i++) {
        string s; cin >> s;
        grid += s;
    }

    displayPathtoPrincess(m,grid);

    return 0;
}

