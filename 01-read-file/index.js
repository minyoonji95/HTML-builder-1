
const fs = require('fs');


let stream = new fs.ReadStream("text.txt", 'utf-8');

stream.on('readable', function() {
    let data = stream.read();
    if (data != null)
    console.log(data)
});

// end of the reading
// stream.on('end', function() {
//     console.log('the end');
// })

stream.on('error', function(err){
    if(err.code == 'ENOENT'){
        console.log("Файл не найден");
    }else{
        console.error(err);
    }
});