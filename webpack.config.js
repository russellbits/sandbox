// What the hell were these constants for anyway?
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'polymer-webpack-loader' }
        ]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!polymer-webpack-loader\/).*/
      },{
        test: /\.vue$/,
        loader: 'vue-loader'
      },{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },{
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      },{
        test: /\.(svg|gif|png|eot|woff|ttf)$/,
        loaders: 'url-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
   contentBase: path.join(__dirname, 'dist'),
   compress: true,
   port: 9000
 }
};
