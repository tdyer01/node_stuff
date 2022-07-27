var dns = require('dns');

var w3 = dns.lookup('tellurium', function (err, addresses, family) {
    console.log(addresses);
  });

  var w3 = dns.reverse('192.168.1.114', function (err, addresses, family) {
    console.log(addresses);
  });

