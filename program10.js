var net = require('net')
var server = net.createServer(function (socket){
    var date = new Date()
    var time = date.getFullYear() + "-"
    if(date.getMonth() < 9)
        time += "0" + (date.getMonth() + 1)
    else
        time += (date.getMonth() + 1)
    if(date.getDate() < 10)
        time += "-0" + date.getDate()
    else
        time += "-" + date.getDate()
    if(date.getHours() < 10)
        time += " 0" + date.getHours()
    else
        time += " " + date.getHours()
    if(date.getMinutes() < 10)
        time += ":0" + date.getMinutes()
    else
        time += ":" + date.getMinutes()
    socket.end(time + "\n")
})
server.listen(process.argv[2])