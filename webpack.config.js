module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.jsx'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
    },
    module: {
        rules: [{
            test: /\.js(x?)$/,
            use: ['babel-loader']
        }]
    },
    output: {
        filename: 'index.js',
        path: __dirname + '/dist',
        publicPath: './dist'
    }
}