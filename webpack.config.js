var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "app/entry.js"),
    output: {
        path: path.resolve(__dirname, "public/javascripts"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
