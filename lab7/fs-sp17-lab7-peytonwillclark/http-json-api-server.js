var http = require('http');
var url=require('url');

var server = http.createServer(function(request,response){
    if(request.method != 'GET')
        return 'uh oh';
    response.writeHead(200, { 'Content-Type': 'application/json' });
    var route = url.parse(request.url,true);
    var query = route.query['?iso'];
    console.log(query);
    var d = new Date(query);
    if(route.pathname.indexOf('/api/parsetime')===0){
        var obj = {};
        obj.hour = d.getHours();
        obj.minute = d.getMinutes();
        obj.second = d.getSeconds();

       response.end(JSON.stringify(obj));
    }
    else if(route.pathname.indexOf('/api/unixtime')===0){
        var obj = {};
        obj.unixtime = d.getTime();

       response.end(JSON.stringify(obj));
    }
    else{
        return 'nope';
    }
 
});
server.listen(parseInt(process.argv[2]));