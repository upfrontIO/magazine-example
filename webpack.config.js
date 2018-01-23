const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BuildDesignPlugin = require('./lib/build_design_plugin')
const OpenPackPlugin = require('openpack')

const isDev = process.env.NODE_ENV !== 'production'
const distPath = path.resolve('./design/dist')

const HMRClient =
  'webpack-hot-middleware/client?reload=true'

module.exports = {
  context: __dirname,
  devtool: isDev ? 'source-map' : 'nosources-source-map',
  entry: Object.assign({}, {
    scripts: [
      isDev && HMRClient,
      './design/source/scripts/index.js'
    ].filter(Boolean)
  }, isDev ? {
    helpers: [
      HMRClient,
      './design/source/helpers/index.js'
    ]
  } : {}),
  output: {
    path: distPath,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['es2015']
        }
      }]
    }, {
      test: /\.(png|jpe?g|svg|gif)$/,
      loader: 'url-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: [isDev && {
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'resolve-url-loader'
        }].filter(Boolean)
      })
    }, {
      test: /living-times\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [isDev && {
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'resolve-url-loader',
          options: {
            root: path.resolve('./design/source/stylesheets')
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [
              autoprefixer()
            ]
          }
        }, {
          loader: 'sass-loader'
        }].filter(Boolean)
      })
    }]
  },
  resolve: {
    extensions: [
      '.scss',
      '.css',
      '.js'
    ]
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new BuildDesignPlugin({
      src: path.resolve('./design/source'),
      dest: distPath
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: isDev
    }),
    new CopyWebpackPlugin([{
      context: 'design/source',
      from: 'assets/@(images|stylesheets)/**',
      to: distPath
    }]),
    new webpack.optimize.OccurrenceOrderPlugin(true)
  ].concat(
    isDev ? [
      new webpack.HotModuleReplacementPlugin(),
      new OpenPackPlugin({
        host: '0.0.0.0',
        port: '3000',
        path: '/'
      })
    ] : [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        warnings: true,
        minimize: true
      })
    ]
  )
}
