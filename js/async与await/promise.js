/*
 *  @author: smile
 *  @date: 2019-02-13 18:48
 *  @description:
*/
// status
var PENDING = 0;//进行中
var FULFILLED = 1;//成功
var REJECTED = 2;//失败

/**
 * Check if a value is a Promise and, if it is,
 * return the `then` method of that promise.
 *
 * @param {Promise|Any} value
 * @return {Function|Null}
 */
function getThen(value) {
    var t = typeof value;
    if (value && (t === 'object' || t === 'function')) {
        var then = value.then;
        if (typeof then === 'function') {
            return then;
        }
    }
    return null;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 *
 * @param {Function} fn A resolver function that may not be trusted
 * @param {Function} onFulfilled
 * @param {Function} onRejected
 */
function doResolve(fn, onFulfilled, onRejected) {
    var done = false;
    try {
        fn(function(value) {
            if (done) return;
            done = true;
            onFulfilled(value);
        }, function(reason) {
            if (done) return;
            done = true;
            onRejected(reason);
        });
    } catch(ex) {
        if (done) return;
        done = true;
        onRejected(ex);
    }
}

function PromiseR(fn) {
    //状态
    var status = PENDING;

    var value = null;

    var handlers = []; //callbacks

    function fulfill(result) {
        value = result;
        status =  FULFILLED;
        handlers.forEach(handle)
        handlers = []
    }

    function reject(error) {
        value = error;
        status = REJECTED;
        handlers.forEach(handle);
        handlers = null;
    }

    function handle(handler) {
        if (status === PENDING) {
            handlers.push(handler)
        } else {
            if ( status === FULFILLED && typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(value);
            }
            if ( status === REJECTED &&
                typeof handler.onRejected === 'function') {
                handler.onRejected(value);
            }
        }
    }

    function resolve(result) {
        try {
            //判断resolve得是不是一个新的promise, 如果是promise类型则进行递归，直到为非promise
            var then = getThen(result)
            if (then) {
                doResolve(result.bind(result), resolve, reject)
                return;
            }
            fulfill(result)
        } catch (e) {
            reject(e)
        }
    }

    this.done = function (onFulfilled, onRejected) {
        setTimeout(function () {
            handle({
                onFulfilled,
                onRejected,
            })
        }, 0)
    }

    this.then = function (onFulfilled, onRejected) {
        var self = this;
        return new PromiseR(function (resolve, reject) {
            return self.done(function (result) {
                if (typeof onFulfilled === 'function') {
                    try {
                        return resolve(onFulfilled(result))
                    } catch (e) {
                        return reject(e)
                    }
                }

            }, function (error) {
                if (typeof onRejected === 'function') {
                    try {
                        return resolve(onRejected(error))
                    } catch (e) {
                        return reject(e)
                    }
                }
            })
        })
    };

    doResolve(fn, resolve, reject);
}


window.MyPromise = PromiseR;
