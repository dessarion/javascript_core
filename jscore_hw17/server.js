let express = require('express');
let bodyParser = require('body-parser');

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/",function(request,response){
    console.log('Server is running!!!');
    response.send('<h1>Welcome to server simulation.</h1>');

});

server.get('/user-data', function(request,response){    
    let obj = request.query;
    let email = obj.firstName + obj.lastName + '@gmail.com'
    
    
    response.send('You have successfully generate e-mail:' + JSON.stringify(email));
})

server.listen(3001)

