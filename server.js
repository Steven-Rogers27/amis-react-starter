const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
/**
 * webpack-dev-middleware + webpack-hot-middleware 实现 HMR
 */
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);
app.use(
  webpackHotMiddleware(compiler)
)

app.post('/api/form', (req, res) => {
  res.json({
    status: 0,
    msg: 'i can success'
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
