# style-loader|css-loader import 对象为空
修改配置webpack
{
    test: /\.css$/,
    loaders: ['style-loader', 'css-loader?modules=true&camelCase=true'],
}

#### 兼容antd
<pre>{
        test: /\.module.css$/,
        loaders: ['style-loader', 'css-loader?modules=true&camelCase=true'],
    },
    {
        test: /\.css$/,
        exclude: /resources/,
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    modules:false
                },
            },
        ]
    },</pre>

使用exclude将antd样式排除