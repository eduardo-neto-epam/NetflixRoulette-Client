module.exports = (api) => {
  api.cache(true);
  if (process.env.NODE_ENV !== 'production') {
    return {
      plugins: ["@babel/plugin-transform-react-jsx-source"],
      presets: ['@babel/preset-env', '@babel/preset-react'],
    } 
  } else {
    return {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    } 
  }
}
