// var path = require('path');
// var SRC_DIR = path.join(__dirname, '/client/src');
// var DIST_DIR = path.join(__dirname, '/client/dist');

// module.exports = {
//   entry: `${SRC_DIR}/index.jsx`,
//   output: {
//     filename: 'bundle.js',
//     path: DIST_DIR
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: SRC_DIR,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015']
//         }
//       }
//     ]
//   }
// };


var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
    mode: "development",
    entry: `${SRC_DIR}/index.jsx`,
    output: {
        filename: "bundle.js",
        path: DIST_DIR
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: SRC_DIR,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env", "@babel/react", "es2015"]
                    }
                }
            }
        ]
    }
};
