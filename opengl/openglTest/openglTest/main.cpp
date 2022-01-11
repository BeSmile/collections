//
//  main.cpp
//  openglTest
//
//  Created by Smile on 2021/11/14.
//  Copyright © 2021 Smile. All rights reserved.
//

//
//  main.cpp
//  openglTest
//
//  Created by Smile on 2021/11/13.
//  Copyright © 2021 Smile. All rights reserved.
//

#include "main.hpp"
#include <iostream>
#include <OpenGL/gl.h>
#include <OpenGL/glu.h>
#include <GLUT/glut.h>

using namespace std;


void init(void) {
    glClearColor(1, 1, 1, 0);
    glMatrixMode(GL_PROJECTION);
    gluOrtho2D(0.0, 200.0, 0.0, 150.0);
}

void lineSegment(void) {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(0.0, 0.4, 0.2);
    glBegin(GL_LINES);
        glVertex2i(180, 15);
        glVertex2i(10, 145);
    glEnd();
    glFlush();
}

void lineSegment1(void) {
    glClear(GL_COLOR_BUFFER_BIT);
    glColor3f(0.0, 0.4, 0.2);
    glBegin(GL_LINES);
    glVertex2i(0, 0);
    glVertex2i(200,150);
    glEnd();
    glFlush();
}

GLenum errorCheck() {
    GLenum code;
    const GLubyte *string;
    code = glGetError();
    if(code != GL_NO_ERROR) {
        string = gluErrorString(code);
        fprintf(stderr, "opengl Error: %s\n", string);
    }
    return code;
}

int main(int argc, char** argv) {

    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB);
//    glutInitWindowPosition(100, 100);
    glutInitWindowPosition(75, 200);
    glutInitWindowSize(400, 300);
    glutCreateWindow("example");

    init();
//    glutDisplayFunc(lineSegment);
    glutDisplayFunc(lineSegment1);
    glutMainLoop();
}

