// To make the import of all the different types of file in HTML simpler by bundling them all into a single file

const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: './app/index.js',                                // entry point of the application
    output: {
        path: path.resolve(__dirname, 'dist'),              //create a folder dist inside root folder of the application
        filename: 'index_bundle.js'                         // name of the file to hold the bundle
    },
     
    //type of transformation to be done on the code
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader'},         // run babel-loader transformation on any js file in the application
            { test: /\.css$/, use: ['style-loader', 'css-loader']},  //run css-loader and style-loader on css files
        ]
    },
    mode: 'development',
    plugins: [                                                  //plugin to create an index.html file inside the dist folder importing the index_bundle.js
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}