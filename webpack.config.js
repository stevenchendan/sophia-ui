module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  module: {
    rules:[
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}
