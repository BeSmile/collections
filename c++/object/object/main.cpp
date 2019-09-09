//
//  main.cpp
//  object
//
//  Created by Smile on 2019/9/7.
//  Copyright © 2019 Smile. All rights reserved.
//

#include <iostream>
#define DEBUG
using namespace std;

class Empty {
public:
    Empty(){};
};

class Point {
private:
    int x, y;
public:
    void Setxy(int a, int b);
    void Move(int a, int b);
    void Display();
    int Getx();
    int Gety();
    Point();
    ~Point();
    Point(int, int);
    Point(Point&);
};

void Point::Setxy(int a, int b) {
    x = a;
    y = b;
}

void Point::Move(int a, int b) {
    x += a;
    y += b;
}

inline int Point::Getx() {
    return x;
}

inline int Point::Gety() {
    return y;
}

Point::Point():x(0), y(0) {
    std::cout << "Initializing default" <<endl;
}

Point::Point(int a, int b):x(a), y(b) {
    std::cout << "Initializing " << a << "," << b << endl;
}

Point::Point(Point &t) {
    x = t.x;
    y = t.y;
}

void Point::Display() {
    std::cout << Getx() << "," << Gety() << endl;
}
Point global(9,5);

Point::~Point(){
    std::cout << "destory" << endl;
};

int main(int argc, const char * argv[]) {
    // insert code here...
    
    Point A;
    
    Point B(23, 44);
    
    Point *p = &A;
    
    Point &R = A;
    
    A.Setxy(4, 9);
    
    p -> Display();
    
    R.Display();
    
    Point C[2];
    
//    Point D[2] = {Point(2,5), Point(6,4)};
    
    Point * ptr1 = new Point;
    delete ptr1;
    
    Point * ptr2 = new Point(5,6);
    ptr2 -> Display();
    delete ptr2;
    
    Point obj2(A);
    std::cout << "------" << endl;
    obj2.Display();
    
    Empty d;
    
    #if defined(DEBUG)
        std::cout << "debug" << endl;
    #endif
    return 0;
}
