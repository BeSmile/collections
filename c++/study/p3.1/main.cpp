#include <iostream>
using namespace std;

int translate(float x, float y, float z);

int main(int argc, char const *argv[]) {
  /* code */
  char protein;
  int in;
  float fiber;
  double fat;
  char pizza = 'A', pop = 'Z';
  unsigned long int uli = 10;
  while (true) {
    goto bottom;
  }
  bottom: {
    std::cout << "bottom" << uli << sizeof(uli);
  }
  int p, v;
  
  std::cout << p << "\n" << &p << "\n" << &v << endl;
  return 0;
}
