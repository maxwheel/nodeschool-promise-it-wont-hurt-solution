var q = require('q'),
    def = q.defer();

var para = process.argv[2];
//console.log(para);
/*
var parsePromised = function(para){
    try{
        JSON.parse(para);
        def.resolve();
    }catch (e){
        def.reject(e);
    }
    return def.promise;
};
*/

q.fcall(JSON.parse, para)
.then(null, console.log);

