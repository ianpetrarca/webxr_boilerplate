const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-cheap-module-source-map',

  // https://webpack.js.org/concepts/entry-points/#multi-page-application
  entry: {
    index: './src/page-index/main.js'
  },

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    port: 3030,
    writeToDisk: false, // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
    disableHostCheck:true,
    host:'localhost'
  },

  node: {
    fs: 'empty'
  },

  // https://webpack.js.org/concepts/loaders/
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|mov|otf|webp|svg|ttf|woff|woff2|wav|mp3|glb|gltf|glsl|opus|json|mp4|PNG)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        }
      }
    ]
  },

  // https://webpack.js.org/concepts/plugins/
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/page-index/tmpl.html',
      inject: 'head',
      chunks: ['index'],
      filename: 'index.html'
    })
  ]
}
