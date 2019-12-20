//
//  ViewController.m
//  FirstApp
//  UIViewController来处理屏幕流
//  Created by apple on 2019/11/11.
//  Copyright © 2019年 apple. All rights reserved.
//

//在这里两种方法实现UIViewController类的基类中定义
//初始视图加载后调用viewDidLoad中的安装程序
//在内存警告的情况下调用didReceviveMemoryWarning

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (IBAction)setTitleLabel:(id)sender {
    [myTitleLabel setText:@"Hello"];
}
@end
