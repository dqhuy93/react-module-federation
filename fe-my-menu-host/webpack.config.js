const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require('./package.json').dependencies;
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    filename: 'remoteEntry.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,

    hot: true,
    port: 3000,
    open: false,
    compress: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    watchFiles: [path.resolve(__dirname, '..')],
    client: {
      overlay: {
        errors: false,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [require.resolve('@babel/preset-react')],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        '@booking': 'booking@http://localhost:3002/remoteEntry.js',
        '@main': 'main1@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': {},
      },
    }),
  ],
};
