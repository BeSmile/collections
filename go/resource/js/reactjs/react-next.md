#react-next
#####css module
创建next.config.js
<pre>const resolve = require('resolve')
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssModules: false,
    webpack (config, options) {
        const { dir, isServer } = options

        config.externals = []

        if (isServer) {
            config.externals.push((context, request, callback) => {
                resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
                    if (err) {
                        return callback()
                    }

                    // Next.js by default adds every module from node_modules to
                    // externals on the server build. This brings some undesirable
                    // behaviors because we can't use modules that require CSS files like
                    // `former-kit-skin-pagarme`.
                    //
                    // The lines below blacklist webpack itself (that cannot be put on
                    // externals) and `former-kit-skin-pagarme`.
                    if (
                        res.match(/node_modules[/\\].*\.js/)
                        && !res.match(/node_modules[/\\]webpack/)
                        && !res.match(/node_modules[/\\]former-kit-skin-pagarme/)
                    ) {
                        return callback(null, `commonjs ${request}`)
                    }

                    callback()
                })
            })
        }

        return config
    },
})</pre>
#####开启修饰符
修改.babelrc配置文件
<pre>{
  "presets": ["next/babel"],
  "plugins": [
    "transform-decorators-legacy",
    "transform-class-properties"
  ]
}
</pre>
##### 引入css文件
next.config.js配置如下
<pre>const resolve = require('resolve')
const withCSS = require('@zeit/next-css');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extract = new ExtractTextPlugin({ filename: 'static/[contenthash].css' });
module.exports = withCSS({
    cssModules: false,
    extractCSSPlugin: extract,
    webpack (config, options) {
        const { dir, isServer } = options

        config.externals = []

        if (isServer) {
            config.externals.push((context, request, callback) => {
                resolve(request, { basedir: dir, preserveSymlinks: true }, (err, res) => {
                    if (err) {
                        return callback()
                    }

                    // Next.js by default adds every module from node_modules to
                    // externals on the server build. This brings some undesirable
                    // behaviors because we can't use modules that require CSS files like
                    // `former-kit-skin-pagarme`.
                    //
                    // The lines below blacklist webpack itself (that cannot be put on
                    // externals) and `former-kit-skin-pagarme`.
                    if (
                        res.match(/node_modules[/\\].*\.js/)
                        && !res.match(/node_modules[/\\]webpack/)
                        && !res.match(/node_modules[/\\]former-kit-skin-pagarme/)
                    ) {
                        return callback(null, `commonjs ${request}`)
                    }

                    callback()
                })
            })
        }
        config.plugins.push(extract);
        return config
    },
})</pre>
在pages下创建_document.js._document的作用在于所有的页面会继承_document.js,所以可以在内部定义head来加载css样式;
<pre>import Document, {Head, Main, NextScript} from 'next/document';
export default class MyDocument extends Document {
    static getInitialProps ({ renderPage }) {
        const transform = (App) => {
            // Next.js gives us a `transformPage` function
            // to be able to hook into the rendering of a page
            // Step 1: Here we will generate the styles
            return App;
        }
        const page = renderPage(transform);
        return { ...page };
    }
    render() {
        const { buildManifest } = this.props;
        const { css } = buildManifest;
        return (
            <html>
                <Head>
                    {css.map(file => {
                        return (
                            <link
                                rel="stylesheet"
                                href={`/_next/${file}`}
                                key={file}
                            />
                        );
                    })}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}</pre>
<em>注:</em>next/Head与next/document中的Head不是同一个