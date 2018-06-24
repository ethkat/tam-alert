const path = require('path');
const devMode = process.env.NODE_ENV !== 'production'

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = (storybookBaseConfig) => {
  devtool: 'source-map',
  storybookBaseConfig.resolve = {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      lib: resolve('src/lib'),
      components: resolve('src/components'),
    },
    modules: [
      'node_modules',
      resolve('src'),
      resolve('node_modules')
    ]
  };

  const rules = [
    {
      test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader : 'url-loader'
    },
    {
      test:/\.(s*)css$/,
      use: ['style-loader', 'css-loader']
    }
  ]

  storybookBaseConfig.module.rules.push(...rules);

  return storybookBaseConfig;
};
