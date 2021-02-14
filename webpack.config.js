const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'sophiaui',
    libraryTarget: 'umd'
  },
  module: {
    rules:[
      { 
        test: /\.tsx?$/, 
        loader: "ts-loader" 
      },
      {
        test: /\*svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  }
}
