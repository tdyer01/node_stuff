var express = require('express');
const { default: ticket } = require('./components/ticket');
const fs = require('fs');
var app = express();
var stub = require('./components/ticket');

//var ticket = stub;
stub.name = "Ted";
const car = {
  type:"UAP", 
  location: {
    latitude:"29.9753",
    longitude:"31.1376"
  },
  eventTimeSpan:"13 minutes"
};


app.get('/', function (req, res) {

  const jsonContent = JSON.stringify(car);
  
  // try {
  //   fs.writeFileSync('./test.txt', jsonContent);
  //   // file written successfully
  // } catch (err) {
  //   console.error(err);
  // }
  var tempstring = "";
  fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    tempstring = data;
    console.log(tempstring);


    //var c = JSON.parse(tempstring);
    console.log("after:");
    console.log(tempstring);
    res.contentType("application/json");
    //res.setDefaultEncoding("UTF-8");
    res.send(tempstring);

  });

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});