var webpack = require('webpack'),
 path = require('path'),
 DefinePlugin = require('webpack/lib//DefinePlugin'),
 UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin'),
 ExtractTextPlugin = require('extract-text-webpack-plugin'),
 WEBPACK_ENV = process.env.WEBPACK_ENV || 'development';
var ExtractTextPluginConfig = new ExtractTextPlugin(
 "./css/index.css"
);

var plugins = [
 new DefinePlugin({
   'process.env': {
     NODE_ENV: JSON.stringify(WEBPACK_ENV)
   }
 }),
 new webpack.optimize.CommonsChunkPlugin({
   name: "vendor",
   filename: "vendor.bundle.js"
 }),
];

if (WEBPACK_ENV === 'production') {
 plugins.push(
   new UglifyJsPlugin({
     warnings: false,
     mangle: false,
   })
 );
}

module.exports = {
 devtool: 'source-map',
 entry: {
   app: path.join(__dirname,'app.js'),
   vendor: ['jquery', 'angular', 'angular-route', 'angular-cookies', 'angular-material', 'angular-aria', 'angular-animate', 'angular-messages', 'angular-ui-bootstrap']
 },
 output: {
   path: path.join(__dirname, '/app/build'),
   filename: 'app.bundle.js'
 },
 devtool: "source-map",
 module: {
   loaders: [{
       test: /\.js$/,
       exclude: /node_modules/,
       loaders: ['babel-loader'],
     },
     {
       test: /\.css$/,
       loaders: ['style', 'css',]
     }
   ],postLoaders: [
     {
       include: path.resolve(__dirname, 'node_modules/pica'),
       loader: 'transform?brfs'
     }
   ]
 },
 plugins: plugins

};
