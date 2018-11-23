package lib

import "time"

//调用器接口
type Caller interface {
	//构建请求
	BuildReq()  RawReq
	//调用
	Call(req []byte, timeoutNs time.Duration) RawResp

	//检查响应
	CheckResp(req RawReq, resp RawResp) * CallResult
}
//
//func BuildReq() RawReq {
//	return RawReq{}
//}
//
//func Call(req []byte, timeoutNs time.Duration) RawResp {
//	return RawResp{}
//}
//
//func CheckResp(req RawReq, resp RawResp) * CallResult{
//	return &CallResult{}
//}
