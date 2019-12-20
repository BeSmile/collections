//
//  ViewController.h
//  FirstApp
//
//  Created by apple on 2019/11/11.
//  Copyright © 2019年 apple. All rights reserved.
//

#import <UIKit/UIKit.h>

//ViewController类继承UIViewController，为iOS应用程序提供基本视图管理模型
@interface ViewController : UIViewController{

    IBOutlet UILabel *myTitleLabel;
    IBOutlet UITabBar *tabBar;
    IBOutlet UIView *view;
//    
//    IBOutlet UITabBar *myTabBar;
}
- (IBAction)setTitleLabel:(id)sender;
@end

