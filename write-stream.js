var fs = require('fs');
var data = 'This is sample content for output text file';

//create a writable stream
var writeStream = fs.createWriteStream('output.txt');

//write the data to the stream with encoding
writeStream.write(data, 'UTF8');

//mark the end of the file
writeStream.end();

writeStream.on('finish', function() {
    console.log('write completed');
});
