//
//  main.cpp
//  study
//
//  Created by Smile on 2019/8/18.
//  Copyright © 2019 Smile. All rights reserved.
//
#include <iostream>
#include <algorithm>
#include <functional>
#include <vector>       // vector
#include <typeinfo>
#include <fstream>


using namespace std;

int max(int, int);
int max(int, int, int);

int max(int x, int y) {
    return x > y ? x : y;
}

int max(int x, int y, int z) {
    return max(x, y);
    return max(y, z);
}

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n" << max(1, 3) << "\n";
//    double *p;
//    p = new double[3];
//
//    for (int i = 0; i < 3; i++) {
//        std::cin >> * (p + i);
//    }
//
//    for (int i = 0; i < 3; i++) {
//        std::cout << *(p+i) << "\n";
//    }
    
//    delete p;
    int *hundred = new int[100];
    int re = 5;
    
    int& a = re;
    
    std::cout << re << "," << &a << "\n";
    
    a = 8;
    std::cout << re << "," << &a << "\n";
    
    
    const int c = 1;
    const int * d = &c;
    
    double array[] = {1.3, 1.4, 1.2, 1.9};
    
    for (int i=0; i< 4; i++) {
        std::cout << array[i] << "\n";
    }
    
    std::cout << array + 4;
    
    double * result = find (array, array + 4, 1.1);
    
    std::cout << "------\n" << result << "\n" << array + 4 << "\n" << (result == array + 4);
    return 0;
}
