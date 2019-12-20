//
//  AppDelegate.m
//  FirstApp
//
//  Created by apple on 2019/11/11.
//  Copyright © 2019年 apple. All rights reserved.
//

#import "AppDelegate.h"

@interface AppDelegate ()

@end

//此处定义UIApplication。上面定义的所有方法都是应用程序UI调动和不包含任何用户定义的方法。
//UIWindow对象被分配用来保存应用程序分配对象。
//UIController作为窗口初始视图控制器
//调用makeKeyAndVisible能使窗口可见
@implementation AppDelegate

// 完成UIApplication的命令，提供关键应用程序事件，如启动完毕，终止，等等
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    return YES;
}


- (void)applicationWillResignActive:(UIApplication *)application {
    // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.
    // Use this method to pause ongoing tasks, disable timers, and invalidate graphics rendering callbacks. Games should use this method to pause the game.
}


- (void)applicationDidEnterBackground:(UIApplication *)application {
    // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.
    // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.
}


- (void)applicationWillEnterForeground:(UIApplication *)application {
    // Called as part of the transition from the background to the active state; here you can undo many of the changes made on entering the background.
}


- (void)applicationDidBecomeActive:(UIApplication *)application {
    // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.
}


- (void)applicationWillTerminate:(UIApplication *)application {
    // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.
}


@end
