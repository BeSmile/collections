#koa-router
[文档位置](https://github.com/alexmingoia/koa-router#exp_module_koa-router--Router)
#### Router
Kind: Exported class
##### new Router([opts])
创建一个新的路由

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>[opts]</td>
        <td>object</td>
        <td></td>
    </tr>
    <tr>
        <td>[opts.prefix]</td>
        <td>String</td>
        <td>prefix router paths</td>
    </tr>
</table>
##### 示例
基础用法:
<pre>var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

router.get('/', (ctx, next) => {
  // ctx.router available
});

app
  .use(router.routes())
  .use(router.allowedMethods());</pre>
##### router.get|put|post|patch|delete|del ⇒ Router
创建<code>router.verb()</code>方法,使用其中一个动词,如<code>router.get()</code>,<code>router.post()</code>.使用<code>router.verb（）</code>将URL参数与回调函数或控制器匹配,当他是http动词中某一个,如<code>router.get()</code>,<code>router.post()</code>.另外<code>router.all()</code>能够匹配所有的方法.
<pre>router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });</pre>
  当路由被匹配到时,它的路径在<code>ctx._matchedRoute</code>处可用，如果已命名，则该名称在<code>ctx._matchedRouteName</code>处可用
##### 命名路由
路由可以自定义名字.这样可以在开发过程中生成URL并轻松地重命名URL.
<pre>router.get('user', '/users/:id', (ctx, next) => {
 // ...
});

router.url('user', 3);</pre>
##### 多个中间件
可能会被给予多个中间件:
<pre>router.get(
  '/users/:id',
  (ctx, next) => {
    return User.findOne(ctx.params.id).then(function(user) {
      ctx.user = user;
      next();
    });
  },
  ctx => {
    console.log(ctx.user);
    // => { id: 17, name: "Alex" }
  }
);</pre>
##### 嵌套路由
支持嵌套路由:
<pre>var forums = new Router();
var posts = new Router();

posts.get('/', (ctx, next) => {...});
posts.get('/:pid', (ctx, next) => {...});
forums.use('/forums/:fid/posts', posts.routes(), posts.allowedMethods());

// responds to "/forums/123/posts" and "/forums/123/posts/123"
app.use(forums.routes());</pre>
##### 路由前缀
路由路径可以在路由器前添加前缀:
<pre>var router = new Router({
  prefix: '/users'
});

router.get('/', ...); // responds to "/users"
router.get('/:id', ...); // responds to "/users/:id"</pre>
##### 路由参数
命名的参数可以在<code>ctx.params</code>中获取到
<pre>router.get('/:category/:title', (ctx, next) => {
  console.log(ctx.params);
  // => { category: 'programming', title: 'how-to-node' }
});</pre>
<code>path-to-regexp</code>模块用于将路径转换为正则表达式.
Kind: instance property of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>path</td>
        <td>String</td>
        <td></td>
    </tr>
    <tr>
        <td>[middleware]</td>
        <td>function</td>
        <td>route middleware(s)</td>
    </tr>
    <tr>
        <td>callback</td>
        <td>function</td>
        <td>route callback</td>
    </tr>
</table>
###### router.routes ⇒ function
返回匹配请求的路由的路由器中间件。
Kind: instance property of Router
###### router.use([path], middleware) ⇒ Router
使用给定的中间件.
中间件会根据<code>.use</code>指定的顺序执行.他们被依次调用,请求从第一个中间件开始，并按照“中断”中间件堆栈的方式工作.
Kind: instance method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
    </tr>
    <tr>
        <td>[path]</td>
        <td>String</td>
    </tr>
    <tr>
        <td>middleware</td>
        <td>function</td>
    </tr>
    <tr>
        <td>[...]</td>
        <td>function</td>
    </tr>
</table>
实例:
<pre>// session middleware will run before authorize
router
  .use(session())
  .use(authorize());

// use middleware only with given path
router.use('/users', userAuth());

// or with an array of paths
router.use(['/users', '/admin'], userAuth());

app.use(router.routes());</pre>
###### router.prefix(prefix) ⇒ Router
为已经初始化的路由器实例设置路径前缀.
Kind: instance method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
    </tr>
    <tr>
        <td>prefix</td>
        <td>String</td>
    </tr>
</table>
实例:
<pre>router.prefix('/things/:thing_id')</pre>
###### router.allowedMethods([options]) ⇒ function
返回单独的中间件，用于响应带OPTIONS请求的Allow头，该头包含允许的方法，并根据需要响应405 Method Not Allowed和501 Not Implemented。
Kind: instance method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>[options]</td>
        <td>Object</td>
        <td></td>
    </tr>
    <tr>
        <td>[options.throw]</td>
        <td>Object</td>
        <td></td>
    </tr>
    <tr>
        <td>[options]</td>
        <td>Boolean</td>
        <td>throw error instead of setting status and header</td>
    </tr>
    <tr>
        <td>[options.notImplemented]</td>
        <td>function</td>
        <td>throw the returned value in place of the default NotImplemented error</td>
    </tr>
    <tr>
        <td>[options.methodNotAllowed]</td>
        <td>function</td>
        <td>throw the returned value in place of the default MethodNotAllowed error</td>
    </tr>
</table>
实例:
<pre>var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());</pre>
Example with Boom
<pre>var Koa = require('koa');
var Router = require('koa-router');
var Boom = require('boom');

var app = new Koa();
var router = new Router();

app.use(router.routes());
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed()
}));</pre>
###### router.redirect(source, destination, [code]) ⇒ Router
使用可选的30x状态码将源重定向到目标网址.
源和目标都可以是路由名称.
<pre>router.redirect('/login', 'sign-in');</pre>
这相当于:
<pre>router.all('/login', ctx => {
  ctx.redirect('/sign-in');
  ctx.status = 301;
});</pre>
Kind: instance method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>source</td>
        <td>String</td>
        <td>URL or route name.</td>
    </tr>
    <tr>
        <td>destination </td>
        <td>String</td>
        <td>URL or route name.</td>
    </tr>
    <tr>
        <td>[code]</td>
        <td>Number</td>
        <td>HTTP status code (default: 301).</td>
    </tr>
</table>
###### router.route(name) ⇒ Layer | false
具有给定名称的查找路线.
Kind: instance method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
    </tr>
</table>
###### router.url(name, params, [options]) ⇒ String | Error
为路线生成URL。获取命名参数的路由名称和映射.
Kind: instance method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>route name</td>
    </tr>
    <tr>
        <td>params </td>
        <td>Object</td>
        <td>url parameters</td>
    </tr>
    <tr>
        <td>[options]</td>
        <td>Object</td>
        <td>options parameter</td>
    </tr>
    <tr>
        <td>[options.query]</td>
        <td>Object | String</td>
        <td>query options</td>
    </tr>
</table>
实例
<pre>router.get('user', '/users/:id', (ctx, next) => {
  // ...
});

router.url('user', 3);
// => "/users/3"

router.url('user', { id: 3 });
// => "/users/3"

router.use((ctx, next) => {
  // redirect to named route
  ctx.redirect(ctx.router.url('sign-in'));
})

router.url('user', { id: 3 }, { query: { limit: 1 } });
// => "/users/3?limit=1"

router.url('user', { id: 3 }, { query: "limit=1" });
// => "/users/3?limit=1"</pre>
###### router.param(param, middleware) ⇒ Router
为命名的路由参数运行中间件。用于自动加载或验证。
Kind: instance method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
    </tr>
    <tr>
        <td>param</td>
        <td>String</td>
    </tr>
    <tr>
        <td>middleware</td>
        <td>function</td>
    </tr>
</table>
实例:
<pre>router
  .param('user', (id, ctx, next) => {
    ctx.user = users[id];
    if (!ctx.user) return ctx.status = 404;
    return next();
  })
  .get('/users/:user', ctx => {
    ctx.body = ctx.user;
  })
  .get('/users/:user/friends', ctx => {
    return ctx.user.getFriends().then(function(friends) {
      ctx.body = friends;
    });
  })
  // /users/3 => {"id": 3, "name": "Alex"}
  // /users/3/friends => [{"id": 4, "name": "TJ"}]</pre>
###### Router.url(path, params) ⇒ String
  从url模式生成URL并给出params。
  Kind: static method of Router

<table>
    <tr>
        <th>参数</th>
        <th>类型</th>
        <th>描述</th>
    </tr>
    <tr>
        <td>path</td>
        <td>String</td>
        <td>url pattern</td>
    </tr>
    <tr>
        <td>params </td>
        <td>Object</td>
        <td>url parameters</td>
    </tr>
</table>
<pre>var url = Router.url('/users/:id', {id: 1});
// => "/users/1"</pre>