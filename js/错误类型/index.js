/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
window.onerror = function(msg, url, row, col, error) {
    console.log('错误信息%s\n出错文件%s\n行号：%s\n列号: %s\n错误详细信息', msg, url, row, col, error);
    return true;
};

// throw new Error();


setTimeout(() => {
   throw new Error('异步错误');;
});

var result = [];
window.performance.getEntries().forEach(function (perf) {
    result.push({
        'url': perf.name,
        'entryType': perf.entryType,
        'type': perf.initiatorType,
        'duration(ms)': perf.duration
    });
});
console.log(result);


window.addEventListener('error', (msg, url, row, col, error) => {
  console.log('我知道 404 错误了');
  console.log(
    msg, url, row, col, error
  );
  return false;
}, true);
