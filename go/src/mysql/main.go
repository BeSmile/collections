/*
 * @Description:
 * @Version:
 * @Author: BeSmile
 * @Date: 2022-01-12 00:38:21
 * @LastEditors: BeSmile
 * @LastEditTime: 2022-01-12 20:10:31
 */

package main

import (
	"database/sql"
	"fmt"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

type User struct {
	username string
	password string
	uid      int64
}

var db *sql.DB

func initDB() error {
	ndb, err := sql.Open("mysql", "root:123456@/go_db")

	if err != nil {
		return err
	}
	db = ndb

	pError := db.Ping()
	if err != nil {
		return pError
	}
	db.SetConnMaxLifetime(time.Minute * 10) //最大连接时长

	db.SetMaxOpenConns(5) // 设置最大连接数

	db.SetMaxIdleConns(10) // 空闲连接数
	return nil
}

func insertRow() {
	s := "insert into user_tbl(username, password) values (?,?)"
	r, err := db.Exec(s, "zhangsan", "123456")
	fmt.Println(2, err, err != nil, nil)
	if err != nil {
		fmt.Printf("err:%v\n", err)
	} else {
		i, _ := r.LastInsertId()
		fmt.Printf("i: %v\n", i)
	}
}

func queryQuery() {
	s := "select uid, username, password from user_tbl where uid = ?"
	var u User

	// 确保调用row之后调用scan，否则不会自动断开
	r := db.QueryRow(s, 12).Scan(&u.uid, &u.username, &u.password)
	if r != nil {
		fmt.Printf("err : %v\n", r)
	}
	fmt.Println(u)

	rows, _ := db.Query("select  *  from  user_tbl  limit  10; ")
	defer rows.Close()
	for rows.Next() {
		rows.Scan(&u.username, &u.password, &u.uid)
		fmt.Println(u)
	}
}

func UpdateUser() {
	s := "update user_tbl set password = ? , username =? where uid = ?"
	res, err := db.Exec(s, "8888888", "Smile", 12)
	if err != nil {
		fmt.Printf("update User uid =%v error", 12)
	}

	rows, _ := res.RowsAffected()

	fmt.Printf("row Effected %v", rows)
}

func deleteUser() {
	s := "delete from user_tbl where uid = ?"
	r, err := db.Exec(s, 8)
	if err != nil {
		fmt.Printf("删除失败 %v", err)
	}

	res, err := r.RowsAffected()
	if err != nil {
		fmt.Printf("Rows Effect Error %v \n", err)
		return
	}
	fmt.Printf("Rows Effect %v \n", res)
}

func main() {
	err := initDB()

	if err != nil {
		fmt.Println("数据库连接失败")
	} else {
		fmt.Println("数据库连接成功")
	}
	insertRow()
	queryQuery()
	UpdateUser()
	deleteUser()
}
