package com.smile.single;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;

public class LazyMan {
    private static boolean isInitialized = false;
    private LazyMan() {
        synchronized(LazyMan.class) {
            if(!isInitialized) {
                isInitialized = true;
            } else {
                throw new RuntimeException("lazyMan已经创建，不要试图反射破坏异常");
            }
        }
        System.out.println("LazyMan Single Ok");
    }

    private static LazyMan lazyMan;

    // 双重锁检测模式， 懒汉模式 DLC模式
    public static LazyMan getInstance() {
        if(lazyMan == null) {
            synchronized(LazyMan.class) {
               if(lazyMan == null) {
                   lazyMan = new LazyMan();
               }
            }
        }
        return lazyMan;
    }

    public static void main(String[] args) throws Exception {
        Field field = LazyMan.class.getDeclaredField("isInitialized");
        field.setAccessible(true);
        LazyMan lazyMan = LazyMan.getInstance();
        Constructor<LazyMan> defaultConstructor = LazyMan.class.getDeclaredConstructor(null); // 设置空参构造器
        defaultConstructor.setAccessible(true);// 反射内容讲 无视私有构造器
        LazyMan lazyMan1 = LazyMan.getInstance();
        field.set(lazyMan1, false);
        LazyMan lazyMan2 = defaultConstructor.newInstance();
        System.out.println(lazyMan);
        System.out.println(lazyMan1);
        System.out.println(lazyMan2);
    }
}
