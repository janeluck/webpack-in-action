module.exports = {
    entry: {
        main: process.cwd() + '/index.js',
    },
    output: {
        path: process.cwd() + '/dest',
        filename: '[name].js',
        publicPath: '/assets/'
    },
    optimization: {
        minimize: false
    }
}