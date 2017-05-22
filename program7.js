var web = require('http')

web.get(process.argv[2], function (response){
    response.setEncoding('utf8')
    response.on("data", console.log)
});