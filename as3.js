const fs=require('fs');
const inputFileName='input.txt';
const outputFileName='output.txt';
fs.readFile(inputFileName,'utf8',(err,data)=>
{
    if(err){
        console.error('Error reading inputFileName:');
        return;
    }
    fs.writeFile(outputFileName,data,'utf8',(err)=>
    {
        if(err){
            console.error('Error writing to outputFileName');
            return;
        }
        console.log('Data successfully transfered from input file to output file.');
    }
    );
});