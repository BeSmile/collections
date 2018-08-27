# 安装webpack和webpack-dev-server
#### 安装依赖
<pre>npm install webpack --save
npm install webpack-dev-server --save</pre>
如果报错安装
<pre>npm install webpack-cli -D</pre>

#### 模块命令行各参数
##### 添加快捷脚本
<pre>webpack --mode development --config ./build/webpack.dev.conf.js</pre>
> --mode 指定环境为开发环境
> --config 执行指定配置文件
##### 参数
<pre>01: 配置选项 Config options:
  --config       配置文件路径，字符串格式，默认是`根目录`下的 webpack.config.js 或 webpackfile.js，
  --config-name  使用配置的名字，字符串
  --env          当配置文件输出的是一个函数时，要指定，在下一节课中会介绍

02: 基本选项 Basic options:
  --context    入口文件根目录，默认为当前目录
  --entry      入口文件,这里只能是字符串，但在配置文件中还可以定义数组或对象
  --watch, -w  监视是否有文件有改动，会自动打包，默认为false
  --debug      Switch loaders to debug mode                            [boolean]
  --devtool    Enable devtool for better debugging experience (Example:
               --devtool eval-cheap-module-source-map)                  [string]
  -d           shortcut for --debug --devtool eval-cheap-module-source-map
               --output-pathinfo                                       [boolean]
  -p           shortcut for --optimize-minimize --define
               process.env.NODE_ENV="production"                       [boolean]
  --progress   Print compilation progress in percentage                [boolean]

03: 模块选项 Module options:
  --module-bind       Bind an extension to a loader                     [string]
  --module-bind-post                                                    [string]
  --module-bind-pre                                                     [string]

04: 输出选项 Output options:
  --output-path                 The output path for compilation assets
                                       [string] [default: The current directory]
  --output-filename             The output filename of the bundle
                                                   [string] [default: [name].js]
  --output-chunk-filename       The output filename for additional chunks
       [string] [default: filename with [id] instead of [name] or [id] prefixed]
  --output-source-map-filename  The output filename for the SourceMap   [string]
  --output-public-path          The public path for the assets          [string]
  --output-jsonp-function       The name of the jsonp function used for chunk
                                loading                                 [string]
  --output-pathinfo             Include a comment with the request for every
                                dependency (require, import, etc.)     [boolean]
  --output-library              Expose the exports of the entry point as library
                                                                        [string]
  --output-library-target       The type for exposing the exports of the entry
                                point as library                        [string]

05: 高级选项 Advanced options:
  --records-input-path       Path to the records file (reading)         [string]
  --records-output-path      Path to the records file (writing)         [string]
  --records-path             Path to the records file                   [string]
  --define                   Define any free var in the bundle          [string]
  --target                   The targeted execution environment         [string]
  --cache                    Enable in memory caching
                      [boolean] [default: It's enabled by default when watching]
  --watch-stdin, --stdin     Exit the process when stdin is closed     [boolean]
  --watch-aggregate-timeout  Timeout for gathering changes while watching
  --watch-poll               The polling interval for watching (also enable
                             polling)                                   [string]
  --hot                      Enables Hot Module Replacement            [boolean]
  --prefetch                 Prefetch this request (Example: --prefetch
                             ./file.js)                                 [string]
  --provide                  Provide these modules as free vars in all modules
                             (Example: --provide jQuery=jquery)         [string]
  --labeled-modules          Enables labeled modules                   [boolean]
  --plugin                   Load this plugin                           [string]
  --bail                     Abort the compilation on first error
                                                       [boolean] [default: null]
  --profile                  Profile the compilation and include information in
                             stats                     [boolean] [default: null]

06: 解析选项 Resolving options:
  --resolve-alias         Setup a module alias for resolving (Example:
                          jquery-plugin=jquery.plugin)                  [string]
  --resolve-extensions    Setup extensions that should be used to resolve
                          modules (Example: --resolve-extensions .es6,.js)
                                                                         [array]
  --resolve-loader-alias  Setup a loader alias for resolving            [string]

07: 优化选项 Optimizing options:
  --optimize-max-chunks      Try to keep the chunk count below a limit
  --optimize-min-chunk-size  Try to keep the chunk size above a limit
  --optimize-minimize        Minimize javascript and switches loaders to
                             minimizing                                [boolean]

08: 统计选项 Stats options:
  --color, --colors               Enables/Disables colors on the console
                                           [boolean] [default: (supports-color)]
  --sort-modules-by               Sorts the modules list by property in module
                                                                        [string]
  --sort-chunks-by                Sorts the chunks list by property in chunk
                                                                        [string]
  --sort-assets-by                Sorts the assets list by property in asset
                                                                        [string]
  --hide-modules                  Hides info about modules             [boolean]
  --display-exclude               Exclude modules in the output         [string]
  --display-modules               Display even excluded modules in the output
                                                                       [boolean]
  --display-max-modules           Sets the maximum number of visible modules in
                                  output                                [number]
  --display-chunks                Display chunks in the output         [boolean]
  --display-entrypoints           Display entry points in the output   [boolean]
  --display-origins               Display origins of chunks in the output
                                                                       [boolean]
  --display-cached                Display also cached modules in the output
                                                                       [boolean]
  --display-cached-assets         Display also cached assets in the output
                                                                       [boolean]
  --display-reasons               Display reasons about module inclusion in the
                                  output                               [boolean]
  --display-depth                 Display distance from entry point for each
                                  module                               [boolean]
  --display-used-exports          Display information about used exports in
                                  modules (Tree Shaking)               [boolean]
  --display-provided-exports      Display information about exports provided
                                  from modules                         [boolean]
  --display-optimization-bailout  Display information about why optimization
                                  bailed out for modules               [boolean]
  --display-error-details         Display details about errors         [boolean]
  --display                       Select display preset (verbose, detailed,
                                  normal, minimal, errors-only, none)   [string]
  --verbose                       Show more details                    [boolean]

09: 选项 Options:
  --help, -h     显示帮助信息                                            
  --version, -v  版本号                                  
  --json, -j     将结果以JSON格式显示</pre>

##### 准备文件夹
<pre>项目根目录
│   package.json
├───node_modules
│       └╌╌ 下面是npm包
├───dist
│     └╌╌╌╌╌logo.jpg 
├───build
│   ├╌╌╌╌╌ build.js
│   ├╌╌╌╌╌ webpack.base.conf.js
│   ├╌╌╌╌╌ webpack.dev.conf.js
│   └╌╌╌╌╌ webpack.prod.conf.js
├───src
│   ├╌╌╌╌╌ main.js
│   └╌╌╌╌╌tmp
│         ├╌╌╌╌╌home.js
│         ├╌╌╌╌╌about.js
│         └╌╌╌╌╌contact.js
│   └╌╌╌╌╌template
│         └╌╌╌╌╌daqi.html // 为hmtl插件的模板
│   └╌╌╌╌╌images
│         └╌╌╌╌╌logo.jpg  </pre>
#### 打包
执行npm命令
<pre>npm run dev</pre>
