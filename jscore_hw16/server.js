let express = require('express');
let bodyParser = require('body-parser');

let server = express();
let jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/",function(request,response){
    console.log('Virtual server is running!!!');
    response.send('<h1>Welcome my wirtual server, regarding Ajax</h1>');

});

server.get('/userGet', function(request,response){
    console.log(request.query);
    let obj = request.query;
    for(let i in obj){
        console.log(obj[i])
    }
    response.send('You have successfully used Get method:' + JSON.stringify(request.query));
});
server.post('/userPost', function (request, response) {
    let obj = request.body;
    for(let i in obj){
        console.log(obj[i]);
    }
    response.send('You have successfully used Post method:' + JSON.stringify(request.body));
});

server.listen(3001)

