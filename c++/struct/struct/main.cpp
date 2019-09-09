//
//  main.cpp
//  struct
//
//  Created by Smile on 2019/9/7.
//  Copyright © 2019 Smile. All rights reserved.
//
#include <iostream>
#include <string>
#include <complex>
using namespace std;

struct Person{
private:
    int age;
    char sex;
public:
    Person() {};
    Person(int a, char s) {
        age = a;
        sex = s;
    }
    void Display() {
        std::cout << age << "\t" << sex << endl;
    }
};

struct Point {
    public:
        Point() {} //无参构造函数
        Point(double a, double b) {
            x = a;
            y = b;
        }
        void Setxy(double a, double b) {
            x = a;
            y = b;
        }
        void Display() {
            std::cout << x << "\t" << y << endl;
        }
    private:
        double x, y;
};

#include <iostream>

int main(int argc, const char * argv[]) {
    // insert code here...
    Point a;
    string str2 = "ok";
    Point b(1.6, 1.99);
    b.Display();
    a.Setxy(1.3, 1.5);
    a.Display();
    
    string str("we are here"), str1 = str;
    
    int i = str.find('here');
    
    std::cout << str << "\t length \t" << str.length() << "\t size \t " << str.size() << str.substr(2, 3) <<  "\t find \t" << i << endl;
    
    complex<int> num1(1, 4);
    
    
    std::cout << num1.real() << num1.imag() << "\n";
    
    reverse(&str[0], &str[0] + 11);
    
    cout << str << endl;
    
    copy(str.begin(), str.end(), str1.begin());
    
    cout << str1 << endl;
    
    copy(str.begin(), str.end(), ostream_iterator<char>(cout));
    
    cout << endl;
    
    Person p(12, 'm');
    p.Display();
    return 0;
}
