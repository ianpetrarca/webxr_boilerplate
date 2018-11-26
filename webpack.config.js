const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "build")
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "A-Frame boilerplate",
      template: `${PATHS.app}/index.html`,
      inject: "head"
    }),
    new CopyWebpackPlugin([{ from: "src/assets", to: "build/assets" }])
  ],
  devServer: {
    overlay: {
      errors: true,
      warnings: false
    }
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitwarning: true
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  }
};
