var q = require('q');
var defer = q.defer();

var f = function(err){
    console.log(err.message);
};

setTimeout(defer.reject,300,new Error("REJECTED!"));

defer.promise.then(null,f);
