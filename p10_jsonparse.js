var q = require('q');
var qio = require('q-io/http');

qio.read("http://localhost:1337")
//.then(function(buffer){
//        return buffer.toString();
//        })
//.then(JSON.parse)
//.then(console.log)
.then(function(json){
        console.log(JSON.parse(json)); //JSON.parse could handle buffer
        })
.then(null, console.log);
