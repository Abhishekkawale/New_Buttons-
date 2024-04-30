const PROXY_CONFIG = [
    {
      context: ['/api/admin'],
      target: 'Http://localhost:9192/api/admin/1/students', // 
      secure: false,
      logLevel: 'debug'
    }
  ];
  
  module.exports = PROXY_CONFIG;
  