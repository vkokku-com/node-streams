/* pipe chaining
 * Uncompressing a file
 */
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));

console.log('file uncompressed');
