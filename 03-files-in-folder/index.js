const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, './secret-folder'), (err, files) => {
    if (err) throw err;
    else {
      console.log("\nCurrent directory filenames:");
      files.forEach(file => {
        fs.stat(path.join(__dirname, `./secret-folder/${file}`), (err, stats) => {
                if (err) throw err;
                  else if (stats.isFile() == true){
                        console.log(`information about ${file} file`);
                        console.log(stats);
                  }
                  else {
                    return false
                  }
            })
      })
    }
  })
