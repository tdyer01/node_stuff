const axios = require('axios');

axios
    .get('https://api.chucknorris.io/jokes/random')
    .then(res => {
      console.log(`statusCode: ${res.status}`);
      console.log(res.data);
    })
    .catch(error => {
      console.error(error);
    });
