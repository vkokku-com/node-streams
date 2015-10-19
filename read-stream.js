var fs = require('fs');
var data = "";
//Create a read stream

var readStream = fs.createReadStream('input.txt');

//set encoding
readStream.setEncoding('UTF8');

//Handle stream events
readStream.on('data', function(chunk) {
    data += chunk;
});

readStream.on('end', function() {
    console.log(data);
});

readStream.on('error', function() {
    console.log(err.stack);
});
