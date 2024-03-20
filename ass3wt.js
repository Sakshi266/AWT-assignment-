const fs = require('fs');

const inputfile = 'input.txt';
const outputfile = 'output.txt';
const data=2;
fs.writeFile(inputfile,data , function (err) {
    if (err) throw err;
    console.log('File created Successfully!');
});

fs.readFile(inputfile, 'utf8', (err, data) => {
    if (err) {
        console.error("error in reading file");
        return;
    }

    const words = data.split(' ');
    const result = words.map(word => {
        const num = parseInt(word);
        return isNaN(num) ? word : (num * num).toString();
    }).join(' ');

    fs.writeFile(outputfile, result, (err) => {
        if (err) {
            console.error("error in writing output file");
            return;
        }
        console.error("Numbers converted to their squares and written to output file successfully!");
        return;
    });
});
