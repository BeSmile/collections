/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2022-01-03 22:49:50
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-04 00:01:35
 */
package main

import (
    "github.com/gin-gonic/gin"
)

func main() {
    r := gin.Default()
    r.GET("/ping", func(c *gin.Context) {
        c.JSON(200, gin.H{
            "message": "pong",
        })
    })
    r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}