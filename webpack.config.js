const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new html({
            template: "./src/template.html",
        }),
    ],
}