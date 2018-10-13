/*var count = require('./counter')
var stuffs = require('./stuffs')
var events =  require('events'); // allows to to do eventlisteners function
var util = require('util') // helps us to utilities, helps us to inherit seting objects properties built into node
var fs = require('fs')  // used for reading and writing file
 var myEmitter = new events.EventEmitter();
myEmitter.on('someevent',(msg)=>{console.log(msg)});
myEmitter.emit('someevent', 'the someevent just occured');
console.log(count(['file','rise']));
console.log(stuffs.adder(3,5));
*/
// to us util below

/*


var person =   function(name){
  this.name =name;
}
util.inherits(person, events.EventEmitter);
var franklin = new person('franklin');
var victor =  new person('victor');
var mi = new person('mi');
 let people = [franklin,victor,mi];
 people.forEach((person)=>{
   person.on('shout', (speak)=>{
     console.log(person.name +' said '+ speak);
   })
 });
 franklin.emit('shout', "why are you shouting");
 //it ends

 //reading file
 //let readme = fs.readFileSync('readme.txt','utf8');
//how to write
//let writefile = fs.writeFileSync('writeMe.txt',readme);


//reading file asyschronously
//let asyncreadme = fs.readFile('readme.txt','utf8', (error, data)=>{
  //how to write
////  let asyncwritefile = fs.writeFile ('writeMe.txt',data, ()=>{});
//});

// how to delete readFile
//fs.unlink('writeMe.txt');


//creating directories synchronously
// fs.mkdirSync('stuff');

// how to remove directories synchronously
//note we can only remove a directory when it is empty
//fs.rmdirSync('stuff');


// how to make directories asynchronously

/*fs.mkdir('stuff', ()=>{
  fs.readFile('readme.txt','utf8',(error, data)=>{
    fs.writeFile('./stuff/writeme.txt', data, ()=>{

    })
  })
})
*/


// how to remove a directory that is not empyt, you have to delete its content before removeing

 /*fs.unlink('./stuff/writeme.txt',()=>{
   fs.rmdir('stuff', ()=>{

   })
 })*/

/*

 var http = require('http');
 var server = http.createServer((request, response)=>{
   console.log('request was made '+ request.url);
   response.writeHead(200, {'Content-Type':'text/plain'});
   response.end('hei rnaky');
 })
 server.listen(3000, '127.0.0.1');
 console.log("you are now listening to port 3000");
 */


 // this is reading in readable stream
/* var http =  require('http');
 var fs = require('fs');
 var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
 //create a listener to listen for data
myreadstream.on('data', (chunk)=>{
  console.log("new chuck received: "+ chunk);

})
*/

//creating a writeable createWriteStream
/*
var fs = require('fs');
var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var mywritestream = fs.createWriteStream(__dirname+'/writeme.txt', 'utf8');
//create a listener to listen for data
myreadstream.on('data', (chunk)=>{
   console.log("new chuck received: ");
  mywritestream.write(chunk)


})
*/

/*
//using pipe as a faster means of writting and reading from readFile
var fs = require('fs');
var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');
var mywritestream = fs.createWriteStream(__dirname+'/writeme.txt', 'utf8');
//create a listener to listen for data
myreadstream.pipe(mywritestream);
*/

/*
//using pipe to write to response
var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response)=>{

  var myreadstream = fs.createReadStream(__dirname + '/readme.txt', 'utf8');

  console.log('request was made '+ request.url);
  response.writeHead(200, {'Content-Type':'text/plain'});
  //pipe read data to the response
  myreadstream.pipe(response);
})
server.listen(3000, '127.0.0.1');
console.log("you are now listening to port 3000");
*/



//sending html to the client
/*
var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response)=>{

  console.log('request was made '+ request.url);
  response.writeHead(200, {'Content-Type':'text/html'});
  var myreadstream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  //pipe read data to the response
  myreadstream.pipe(response);
})
server.listen(3000, '127.0.0.1');
console.log("you are now listening to port 3000");
*/



//serving json to the client
/*
var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response)=>{

  console.log('request was made '+ request.url);
  response.writeHead(200, {'Content-Type':'application/json'});
  var myobj={
    name:"ranky",
    game:"game boy",
    age:27
  };
  response.end(JSON.stringify(myobj))
})
server.listen(3000, '127.0.0.1');
*/



// basic routing
/*
var http = require('http');
var fs = require('fs');
var server = http.createServer((request, response)=>{

  if(request.url=='/home'||request.url=='/'){
    response.writeHead(200,{'Content-Type':"text/html"});
    fs.createReadStream(__dirname+'/index.html').pipe(response);
  } else if(request.url=='/contact'){
    response.writeHead(200,{'Content-Type':"text/html"});
    fs.createReadStream(__dirname+'/contact.html').pipe(response);
  }else if(request.url=='/api/management'){
    response.writeHead(200,{'Content-Type':"application/json"});
    var ranky =[{name:"ranky",age:27,occupation:"web developer"},{name:"james",age:30,occupation:"mobile developer"},{name:"andy",age:27,occupation:"project developer"}];
    response.end(JSON.stringify(ranky));
  }else{
    response.writeHead(404,{'Content-Type':"text/html"});
    fs.createReadStream(__dirname+'/404.html').pipe(response);
  }
})
server.listen(3000, '127.0.0.1');*/
 var express = require('express');
 var app = express();
 var bodyparser = require('body-parser');
 var urlencodedParser = bodyparser.urlencoded({extended:false})
/* sending message direc

app.get('/',(request, response)=>{
  response.send('this is the home page');
})
app.get('/contact',(request, response)=>{
  response.send('this is the contact page');
})
app.get('/profile/:id',(request, response)=>{
  response.send('you request to see a user with the id of '+ request.params.id);
})*/

//sending html readFile
/*
app.get('/',(request, response)=>{
  response.sendFile(__dirname+"/index.html");
})
app.get('/contact',(request, response)=>{
  response.sendFile(__dirname+"/contact.html");
})
app.get('/profile/:id',(request, response)=>{
  response.sendFile('you request to see a user with the id of '+ request.params.id);
})
*/



// template engine (ejs)
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'))
app.get('/',(request, response)=>{
  response.render("index");
})
app.get('/contact',(request, response)=>{

  response.render("contact",{query:request.query});
})

app.post('/contact',urlencodedParser,(request, response)=>{

  response.render("contact",{body:request.body});
})
app.get('/profile/:id',(request, response)=>{
  var obj = {age:27,job:"programmer", hobbies:["reading", "codding","flexing"]};
  response.render("profile",{person:request.params.id, obj});
})
 //express should l sten to  a port


 //partial views

 app.listen(3000)
