var APP_PATH = "./app/index.js";
var BUILD_PATH = "./public/javascripts";

module.exports = {
    entry: APP_PATH,
    output: {
        path: BUILD_PATH,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel']
            }
        ]
    }
};
