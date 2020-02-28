const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: 'source-map',
    mode: "development",
    target: "node"
};
