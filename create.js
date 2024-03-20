const fs=require("fs");
const fileName='input.txt';
const filecontent='this is a sample text content';
fs.writeFile(fileName,filecontent,'utf8',(err)=>{
    if (err){
        console.error('Error creating input.txt');
        return;
    }
    console.log('input.txt has been successfully created with the given content.');
});
