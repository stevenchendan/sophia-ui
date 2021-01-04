const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'sophiaui',
    libraryTarget: 'umd'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules:[
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'SophiaUI - React',
      template: 'index.html'
    })
  ]
}
