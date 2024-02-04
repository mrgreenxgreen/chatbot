// const path = require('path');

// // webpack.config.js
// module.exports = {
//     entry: './src/index.js', // Entry point of your application
//     output: {
//       filename: 'bundle.js', // Output bundle name
//       path: path.resolve(__dirname, 'dist'), // Output directory
//     },
//     module: {
//       rules: [
//         {
//           test: /\.js$/,
//           exclude: /node_modules/,
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//             },
//           },
//         },
//       ],
//     },
//   };

const path = require('path');

module.exports = {
    entry:{
        main: './index.js'
    },
    output: {
        path: path.join( __dirname, 'prod-build'),
        publicPath: '/',
        filename: '[name].js',
        clean:true
    },
    mode:'production',
    target:'node',
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",

            }
        ]
    }
}
  