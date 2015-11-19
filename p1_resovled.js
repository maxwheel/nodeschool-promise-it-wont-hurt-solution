var q = require('q');

var defer = q.defer();
//console.log("defer created.");
//var f = function(){
    setTimeout(function(){
            defer.resolve("RESOLVED!");
            }, 300);
//};
//f();
//console.log("defer resolved.");
defer.promise.then(console.log);
//console.log("defer promise then runs.");



