const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, 'files-copy'), (err) => {
    if (err) {
        console.log(err);
    }
});
    fs.readdir(path.join(__dirname, './files'), (err, files) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log("\nCurrent directory filenames:");
          files.forEach(file => {
              fs.copyFile((path.join(__dirname, `./files/${file}`)), (path.join(__dirname, `./files-copy/${file}`)), err => {
                if (err) {
                  console.log(err);
                }
                else {
                    console.log('files were copied successfully')
                }
              })
          })
        }
      })
