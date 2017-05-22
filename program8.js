var web = require('http')
var str = ""
var charCount = 0

web.get(process.argv[2], function (response){
    response.on("data", function(data){
        charCount += data.toString().length
        str += data.toString()
    })
    response.on("end", function(){
        console.log(charCount)
        console.log(str)
    })
});
