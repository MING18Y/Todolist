var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: path.resolve(__dirname, 'app/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude:[node_modules_dir],
        use: [
          {
            loader:'babel-loader',
            query:{
              presets: ['es2015', 'react']
            }
          },
        ],
      },{
      test: /\.jsx?$/,
      use: [
        {
          loader:'babel-loader',
          query:{
            presets: ['es2015', 'react']
          }
        },
      ],
    },{
      test: /\.css$/,
      use:[ 'style-loader', 'css-loader' ]
    },{
      test: /\.less$/,
      use:[
        {
          loader: 'style!css!less'
        }
      ]
    },{
      test: /\.scss$/,
      use:[
        {
          loader: 'style!css!sass'
        }
      ]
    },{
      test: /\.(png|jpg)$/,
      use:[
        {
          loader: 'url?limit=25000'
        }
      ]
    },{
      test: /\.(png|jpg)$/,
      use:[
        {
          loader: 'url?limit=25000'
        }
      ]
    },{
      test: /\.woff$/,
      use:[
        {
          loader: 'url?limit=100000'
        }
      ]
    }
  
  
  ]
  }
};

module.exports = config;
