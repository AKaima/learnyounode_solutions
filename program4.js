var fs = require('fs')
var buf

function lineCount(callback){
    fs.readFile(process.argv[2], function done(err, contents){
        if(err)
            buf = undefined
        buf = contents
        callback()
    })
}

function countLines(){
    console.log(buf.toString().split('\n').length - 1)
}

lineCount(countLines)