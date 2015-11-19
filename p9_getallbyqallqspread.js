var q = require('q');
var def1 = q.defer(),
    def2 = q.defer();

var all = function(p1, p2){
    var def3 = q.defer();
    var counter = 0;
    var res = [];
    var inc = function(){++counter};
    var complete = function(){
        if (counter === 2){
            def3.resolve(res);
        }
    }
    var insert = function(elem){
        res.push(elem);
    }
    p1.then(insert).then(inc).then(complete).then(null, console.log);
    p2.then(insert).then(inc).then(complete).then(null, console.log);
    return def3.promise;
}

//all(def1.promise, def2.promise).then(console.log);

//q.all([def1.promise,def2.promise]).then(console.log);
q.all([def1.promise,def2.promise])
    .spread(function(res1,res2){
            console.log([res1,res2]);
                });

setTimeout(function(){
        def1.resolve("PROMISES");
        def2.resolve("FTW");
        }, 1000);


