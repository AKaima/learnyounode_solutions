var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res){
    if(url.parse(req.url).pathname == "/api/parsetime")
    {
        res.writeHead(200, { 'Content-Type': 'application/json' })  
        var date = new Date(url.parse(req.url, true).query['iso'])
        res.end(JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }))
    }
    else if(url.parse(req.url).pathname == "/api/unixtime")
    {
        res.writeHead(200, { 'Content-Type': 'application/json' })  
        var date = new Date(url.parse(req.url, true).query['iso'])
        res.end(JSON.stringify({"unixtime": date.getTime()}))
    }
    res.writeHead(404)
    res.end()
})

server.listen(process.argv[2])