const fs = require('fs');

const inputfile = 'input.txt';
const outputfile = 'output.txt';

fs.writeFile(inputfile, ' pratik     2 4 6 8', function (err) {
    if (err) throw err;
    console.log('File created Successfully!');
});

fs.readFile(inputfile, 'utf8', (err, data) => {
    if (err) {
        console.error("error in reading file");
        return;
    }
     //console.log(data);
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
      
         //console.log(result);
        return;
    });
});
