const path = require('path');

module.exports = {
  entry: './scripts/index.js',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname, 'build')
  }
};