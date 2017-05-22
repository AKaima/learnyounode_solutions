var fs = require('fs')

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function done(err, files)
    {
        if(err)
            return callback(err)
        files = files.filter(function(file){
            return(file.split(".")[1] == ext)
        })
        callback(null, files)
    })
}