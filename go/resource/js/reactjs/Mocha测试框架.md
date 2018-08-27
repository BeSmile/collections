# Mocha测试框架
#### 安装
全局安装 
<pre>npm install --global mocha</pre>
#### 开始使用
<pre>var assert = require('assert');
const add = (x, y) => {
    return x + y;
}
describe('Array', function() {
    describe('add ', () => {
        it('1+1 应该等于2', function() {
            assert.equal(add(1,1), 2);
        })  
    })
})</pre>
测试add函数相加功能
> <code>describe</code>块称为"测试套件"（test suite），表示一组相关的测试。
> <code>it</code>块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。
#### 检查多次调用
如果你使用异步回调测试,如果多次调用函数Mocha会抛出异常.这对于捕捉意外调用两次很方便.
<pre>it('double done', function(done) {
  // Calling `done()` twice is an error
  setImmediate(done);
  setImmediate(done);
});</pre>
运行以上例子会给我们以下错误信息;
<pre>✓ double done
  1) double done

  1 passing (6ms)
  1 failing

  1) double done:
     Error: done() called multiple times
      at Object.<anonymous> (mocha.test.js:1:63)
      at require (internal/module.js:11:18)
      at Array.forEach (<anonymous>)
      at startup (bootstrap_node.js:187:16)
      at bootstrap_node.js:608:3</pre>
#断言
Mocha允许你使用任何你想要的断言库.在以上例子中,我们通常使用的是node内建 assert模块,如果他抛出异常,他会起作用.这意味着你可以使用以下库:
> [should.js](https://github.com/shouldjs/should.js) BDD风格
> [chai](http://chaijs.com/) expect(), assert() and should-style assertions
> [expect.js](https://github.com/LearnBoost/expect.js) expect() style assertions
> [better-assert](https://github.com/visionmedia/better-assert) c语言风格assert()
> [unexpected](“the extensible BDD assertion toolkit”)
#### 异步代码
使用Mocha测试异步代码不是一件简单的事情! 只需在测试完成时调用回调.通过it添加一个回调(通常命名为done).Mocha会知道他应该等待这个函数被调用来完成测试.此实例回调会接受error实例或者false值;其他任何事情都会导致测试失败.
<pre>describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });
  });
});</pre>
让事情变得更轻松,done（）回调函数也接受一个Error实例（即新的Error（））,所以我们可以更直接的使用.
<pre>describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
});</pre>
WORKING WITH PROMISES
[传送门](https://mochajs.org/#examples)