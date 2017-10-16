require('./utils/check-versions')();

const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');
const _CONFIG = require('./config');
const webpackConfig = require('./webpack/webpack.prod.conf');

const spinner = ora('building for production...');
spinner.start();

rm(_CONFIG.resolve(_CONFIG.directories.output.public), err => {
  
  if (err) {
    throw err;
  }
  
  webpack(webpackConfig, function (err, stats) {    
    spinner.stop();
    
    if (err) {
      throw err;
    } 
    
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n');

    console.log(chalk.cyan('  Build complete.\n'));

    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));

  });
})
