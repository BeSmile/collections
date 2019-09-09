//
//  main.cpp
//  friend
//
//  Created by Smile on 2019/9/8.
//  Copyright © 2019 Smile. All rights reserved.
//

#include <iostream>
#include <cmath>
using namespace std;

class base{
    int number;
    static int a;
public:
    void set(int i, int j);
    static int geta() { return a; };
    int getn() { return number; };
    void show() { cout << number << "," << a << endl; };
};

class Point{
private:
    double X, Y;
    const double p;
public:
    Point(double, double, double);
    double GetX();
    double GetY();
    double GetP() const;
    friend double distances(Point & p1, Point & p2);
    ~Point(){};
};

Point::Point(double a, double b, double c):X(a), Y(b), p(c) {
    X = a;
    Y = b;
};

double Point::GetX(){
    return this -> X;
}

double Point::GetY(){
    return this -> Y;
}

double Point::GetP() const{
    return this -> p;
}

double distances(Point& p1, Point& p2) {
    double dx = p1.GetX() - p2.GetX();
    double dy = p1.GetY() - p2.GetY();
    return sqrt(dx * dx + dy * dy);
}

int main(int argc, const char * argv[]) {
    // insert code here...
    Point p1(2.3, 4.5,22), p2(6.3, 1.5,3);
    std::cout << p1.GetX() << "\t" << p1.GetP() << "\t" << p1.GetY() << "\t distances" << distances(p1, p2) << endl;
    return 0;
}
