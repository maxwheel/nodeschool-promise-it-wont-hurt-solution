var q = require('q');
var def = q.defer();

var throwMyGod = function(){
    throw new Error("OH NOES");
};

var iter = function(i){
    console.log(i);
    return i+1;
};

var pro = q.fcall(iter, 1);
for(var i=2;i<6;i++){
    pro = pro.then(iter);
}
pro = pro.then(throwMyGod);
for(var i=6;i<11;i++){
    pro = pro.then(iter);
}
pro.then(null, console.log);
