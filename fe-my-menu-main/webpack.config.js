const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require('./package.json').dependencies;

module.exports = {
  name: 'mfe-main',
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    asyncChunks: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: 'http://localhost:3001/',
  },
  devServer: {
    port: 3001,
    hot: true,
    compress: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
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
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'main1',
      filename: 'remoteEntry.js',
      exposes: {
        './RemoteApp': '/src/pages/RemoteApp',
      },
      // remotes: {
      //   host: 'host@http://localhost:3000/remoteEntry.js',
      // },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'react-router-dom': {},
      },
    }),
  ],
};
