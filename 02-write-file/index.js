const path = require('path');
const fs = require('fs');
const {
    stdin,
    stdout,
    exit
} = require('process');
const input = fs.createWriteStream(path.join(__dirname, 'text.txt'));
console.log('Введите пожалуйста текст: \n');
stdin.on('data', text => {
    if (text.toString().trim() == 'exit') exit();
    input.write(text.toString());
})
process.on('exit', () => stdout.write('До новых встреч!\n'));
process.on('SIGINT', () => process.exit());
