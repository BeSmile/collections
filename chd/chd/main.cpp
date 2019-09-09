//
//  main.cpp
//  chd
//
//  Created by Smile on 2019/8/18.
//  Copyright © 2019 Smile. All rights reserved.
//
#include "yaml-cpp/yaml.h" //安装yaml-cpp参考google code 主页
#include <iostream>
#include <fstream>
#include <vector>

struct Map {
    std::string name;
    int         mapId;
};

struct Duplicate {
    std::string name;
    int         mapId;
    int         num;
    int         hased;
    std::vector <Map> maps;
};

using namespace std;

// now the extraction operators for these types //重载 >> 预算符。。。。
void operator >> (const YAML::Node& node, Map& v) {
    node['name'] >> v.name;
    node['mapId'] >> v.mapId;
}

void operator >> (const YAML::Node& node, Duplicate& duplicate) {
    node["name"] >> duplicate.name;
    node["mapId"] >> duplicate.mapId;
    node["num"] >> duplicate.num;
    node["hased"] >> duplicate.hased;
    const YAML::Node& maps = node[maps];
    for(unsigned i=0;i<maps.size();i++) {
        Map map;
        maps[i] >> map;
        duplicate.maps.push_back(map);
    }
}

int main(int argc, const char * argv[]) {
    // insert code here...
    std::ifstream fin("./duplicate.yaml");
    YAML::Parser parser(fin); //yaml 分析输入的配文件。出错抛出YAML::ParserException
    YAML::Node doc;
    while(parser.GetNextDocument(doc))
    {
        for(unsigned i=0;i<doc.size();i++) {//i的实际值是0，1，2 ；关联yaml 中三个大的struct：ogre，dragon，wizard
            Duplicate duplicate;
            doc[i] >> duplicate;
            std::cout << duplicate.name << "\n";
        }
       
    }

    std::cout << "Hello, World!\n";
    return 0;
}
