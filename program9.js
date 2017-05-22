var web = require('http')
var str = ["", "", ""]
var printCount = 0

function getData(i)
{
    web.get(process.argv[2 + i], function (response){
        response.on("data", function(data){
            str[i] += data.toString()
        })
        response.on("end", function()
        {
            printCount++
            if(printCount == 3)
                printFiles()
        })
    })
}

function printFiles()
{
    for(var i = 0; i < 3; i++)
        console.log(str[i])
}

for(var i = 0; i < 3; i++)
    getData(i)