var p6 = require('./program6')

var call = function(err, files) {
    if(err)
        console.log(err)
    files.forEach(function(file)
    {
        console.log(file)
    })
}

p6(process.argv[2], process.argv[3], call);