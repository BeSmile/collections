package lib

import "time"

type ResultCode int

type RawReq struct {
	Id		int64
	Req		[]byte
}

type RawResp struct {
	Id 		int64
	Resp	[]byte
	Error	error
	Elapse time.Duration
}

//调用结果
type CallResult struct {
	Id		int64
	Req		RawReq
	Resp	RawResp
	Msg		string
	Elapse time.Duration
	Code	ResultCode
}

type GenStatus int

const (
	STATUS_ORIGINAL GenStatus = 0
	STATUS_STARTED  GenStatus = 1
	STATUS_STOPPED   GenStatus = 2
)


type Generator interface {
	Start()
	Stop() (uint64, bool)
	Status() GenStatus
}