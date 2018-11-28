package datafile2

import (
	"errors"
	"io"
	"os"
	"sync"
)

type Data []byte

type DataFile interface {
	Read() (rsn int64, d Data, err error)
	Write(d Data) (wsn int64, err error)
	Rsn() int64 //数据块的序列号
	Wsn() int64
	DataLen() uint32
}

type myDataFile struct {
	f       *os.File
	fmutex  sync.RWMutex
	rCond   *sync.Cond
	woffset int64
	roffset int64
	wmutex  sync.Mutex
	rmutex  sync.Mutex
	dataLen uint32
}

func (df *myDataFile) Rsn() int64 {
	df.rmutex.Lock()
	defer df.rmutex.Unlock()
	return df.roffset / int64(df.dataLen)
}

func (df *myDataFile) Wsn() int64 {
	df.wmutex.Lock()
	defer df.wmutex.Unlock()
	return df.woffset / int64(df.dataLen)
}

func NewDataFile(path string, dataLen uint32) (DataFile, error) {
	f, err := os.Create(path)
	if err != nil {
		return nil, err
	}

	if dataLen == 0 {
		return nil, errors.New("Invalid data length !")
	}

	df := &myDataFile{f: f, dataLen: dataLen}

	df.rCond = sync.NewCond(df.fmutex.RLocker())
	return df, nil
}

//读操作
func (df *myDataFile) Read() (rsn int64, d Data, err error) {
	var offset int64
	df.rmutex.Lock()
	offset = df.roffset
	df.roffset += int64(df.dataLen) //每次读取指定长度数据
	df.rmutex.Unlock()

	//读取数据块

	rsn = offset / int64(df.dataLen)

	bytes := make([]byte, df.dataLen)
	df.fmutex.RLock()
	defer df.fmutex.RUnlock()

	for {

		_, er := df.f.ReadAt(bytes, offset) // readAt 根据偏移量读取指定长度
		if er != nil {
			//防止读到临界值
			if err == io.EOF {
				df.rCond.Wait()
				continue
			}
			return
		}
		d = bytes
		return
	}
}

func (df *myDataFile) Write(d Data) (wsn int64, err error) {
	var offset int64
	df.wmutex.Lock()
	offset = df.woffset
	df.woffset += int64(df.dataLen)
	df.wmutex.Unlock()

	wsn = offset / int64(df.dataLen)

	var bytes []byte
	if len(d) > int(df.dataLen) {
		bytes = d[0:df.dataLen]
	} else {
		bytes = d
	}
	df.fmutex.Lock()
	_, err = df.f.Write(bytes)
	df.fmutex.Unlock()
	df.rCond.Signal()
	return
}

func (df *myDataFile) DataLen() uint32 {
	return df.dataLen
}
