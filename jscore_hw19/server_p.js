let express = require('express');
let bodyParser = require('body-parser');

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);
server.use(bodyParser.urlencoded({
    extended: true
    }));

server.get("/",function(request,response){
    console.log('Server is running!!!');
    response.send('<h1>Welcome to server simulation.</h1>');

});

server.get('/userGet', function(request,response){    
    let reqObj = request.query
    for(let validator in reqObj){
        reqObj[validator] = `${reqObj[validator]} - Validated by GET`
    }
    response.send(JSON.stringify(reqObj));
});

server.post('/userPost', function(request,response){    
    let reqObj = request.body
    for(let validator in reqObj){
        reqObj[validator] = `${reqObj[validator]} - Validated by POST`
    }
    response.send(JSON.stringify(request.body));
})

server.listen(3001)

