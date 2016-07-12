const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev.js');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true
});

server.listen(8080, 'localhost', (err, result) => {
  if (err) console.log(err);
  console.log(`Listening on port 8080`);
});
