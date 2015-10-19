/* Chaining Streams
 * Compressing a file
 */

var fs = require('fs');
var zlib = require('zlib');

//compress the file input.txt to input.txt.zp

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log('File Compressed');
