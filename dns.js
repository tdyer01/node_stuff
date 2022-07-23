var dns = require('dns');

var w3 = dns.lookup('tantalum', function (err, addresses, family) {
    console.log(addresses);
  });

  var w3 = dns.reverse('192.168.1.131', function (err, addresses, family) {
    console.log(addresses);
  });

