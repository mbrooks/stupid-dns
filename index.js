const returnIp = '1.2.3.4';

const dnsd = require('dnsd');
dnsd.createServer(function(req, res) {
  res.end(returnIp)
}).listen(53, '0.0.0.0');
console.log('Server running at 0.0.0.0:53'); 
