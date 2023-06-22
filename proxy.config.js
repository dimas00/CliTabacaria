const proxy = [
    {
      context: '/api',
      target: 'http://localhost:8080/TabacariaApp',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;