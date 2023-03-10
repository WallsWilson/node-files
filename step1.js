const fs = require('fs');
const process = require('process');


function cat(path) {

fs.readFile(path, function(err, data){
    if(err) {
        console.log(err);
        process.exit(1);
    } else {
    console.log(`file contents: ${data}`);
    }
}) ;
}
cat(process.argv[2])