//*module.exports={
   // x:20,
  //  y:20,
    //z:function (){
      //  return 10;
  ////       }
//}
/*console.log("package.json");
const colors= require('colors');
console.log("sonal shukla ".blue)*/
//const http= require('http');
//const Data = require('./Data');
//const data=require('./Data')
//http.createServer((req,resp)=>{
  //resp.writeHead(200,{'Containt-Type':'application\json'});
  //resp.write(JSON.stringify(Data));
  //resp.end();
  //}).listen(5000);
  //console.log(process.argv)
 /* PS C:\Users\Asus\Desktop\JavaSript coding> node app.js Hello Sonal
[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\Asus\\Desktop\\JavaSript coding\\app.js',
  'Hello',
  'Sonal'
]*/
//console.log(process.argv[2])
//console.log(process.argv[3])
/*for input/*const fs=require('fs');
const input = process.argv;
fs.writeFileSync(input[2],input[3])*/
/* for output/*PS C:\Users\Asus\Desktop\JavaSript coding> node app.js apple.txt 'this is my favorate frout'
PS C:\Users\Asus\Desktop\JavaSript coding>*/ 
/*input/*const fs=require('fs');
const input = process.argv;
if(input[2]=='add')
{
fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
  fs.unlinkSync(input[3])
}
else{
  console.log('Invalid Output')
}*/
/*output/*PS C:\Users\Asus\Desktop\JavaSript coding> node app.js add orange.txt 'this is my orange file'
PS C:\Users\Asus\Desktop\JavaSript coding>*/
/*for Input/*const fs=require('fs');
const input = process.argv;
if(input[2]=='add')
{
fs.writeFileSync(input[3],input[4])
}
else if(input[2]=='remove')
{
  fs.unlinkSync(input[3])
}
else{
  console.log('Invalid Output')
}*/
/* for Output/*PS C:\Users\Asus\Desktop\JavaSript coding> node app.js add data.txt 'this is my orange file'  
PS C:\Users\Asus\Desktop\JavaSript coding> node app.js remove data.txt */
/*const fs = require('fs')
fs.writeFileSync('apple.txt','this is apple file good')*/
const fs = require('fs');
const path = require('path');
const dirpath  = path.join(_dirname);
console.warn(dirpath);