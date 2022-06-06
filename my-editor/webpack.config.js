const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'editor',
      template: './src/index.html'
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: './dist',
  },
  module: {
    rules: [{
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
    ]
  }
}