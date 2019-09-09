//
//  main.cpp
//  function
//
//  Created by Smile on 2019/9/7.
//  Copyright © 2019 Smile. All rights reserved.
//

#include <iostream>
#include <string>
#include <complex>
#include <string>

using namespace std;


//typedef double array1[12];
inline int isnumber(char c) { return ( c>= '0' && c <= '9')?1:0;};

template <class T>
void printer(complex <T> a) {
    std::cout << a.real() << "\t" << a.imag() << endl;
}

template <typename T>
int min(int x, int y) {
    return x > y? y : x;
}

template <typename T>
int max(int x, int y) {
    return x > y ? x : y;
}

void swap(string, string);
void swap1(string *, string *);

void swap(string str1, string str2) {
    string tmp1 = str1; str1 = str2; str2 = tmp1;
    std::cout << str1 << endl << str2 << endl;
}

void swap1(string * s1, string * s2) {
    string tmp1 = *s1; *s1 = *s2; *s2 = tmp1;
    std::cout << "swap1 \t" << *s1 << endl << *s2 << endl;
}

void swapArray(int []);

typedef int newIt[3];

void doArray(newIt& adf) {
    std::cout << adf << endl;
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    swap("dw1", "dw2");
    
    string str1("str1"), str2("str2");
    
    std::cout << "转换前" << str1 << endl << str2 << endl;
    
    swap1(&str1, &str2);
    
    std::cout << "转换后" << str1 << endl << str2 << endl;
    
    newIt s = {1,2,34};
    doArray(s);
    
    std::cout << isnumber('2') << endl;
    
    complex <string> st("real", "imag");
    printer(st);
    
    std::cout << "min \t" << min(3, 8) << endl;
    return 0;
}
