import webpack from 'webpack';
import express from 'express';
import dev from 'webpack-dev-middleware';
import hot from 'webpack-hot-middleware';
import webpackConfig from './webpack/webpack.dev';

const compiler = webpack(webpackConfig);
const app = express();

app.use(dev(compiler));
app.use(hot(compiler));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
