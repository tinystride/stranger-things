module.exports = {
  cacheDirectory: true,
  presets: [
    'babel-preset-es2015',
    'babel-preset-es2016',
    'babel-preset-react',
    'babel-preset-stage-1',
  ].map(require.resolve),
  plugins: [
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-object-rest-spread'
  ].map(require.resolve)
};
