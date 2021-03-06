const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
    index: './src/index.js',
  },
  
  devtool: 'inline-source-map',
  
  devServer: {
    static: './dist',
  },
  
  plugins: [
    new HtmlWebpackPlugin({
        title: 'Development',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};