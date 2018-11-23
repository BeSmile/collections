package loadgen

import (
	"github.com/BeSmile/collections/go/src/loadgen/lib"
	"time"
)

type myGenerator struct {
	caller lib.Caller
	timeoutNs time.Duration  //响应超时时间
	lps 	int32			//每秒载荷发送量
	durationNs	time.Duration	//负载持续时间
	concurrency	int32 //并发量
	tickets	[]string	//票池
	stopSign	chan byte	//停止通道
	status	lib.GenStatus	//状态
	resultCh chan *lib.CallResult	//调用通道结果
}

func NewGenerator(caller lib.Caller, timeoutNs time.Duration, lps int32, durationNs time.Duration, result chan *lib.CallResult) (lib.Generator, error) {

	gen := &myGenerator{
		caller: caller,
		timeoutNs: timeoutNs,
		lps: lps,
		durationNs: durationNs,
		status: lib.STATUS_ORIGINAL,
		stopSign: make(chan byte, 1),
		resultCh: result,
	}

	return gen, nil
}

func (gen *myGenerator ) Start() {
	
}

func (gen *myGenerator ) Stop() (uint64, bool) {
	return 0, false
}

func (gen *myGenerator ) Status() lib.GenStatus {
	return 0
}