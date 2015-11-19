var q = require('q'),
    qhttp = require('q-io/http');

var serverSession = "http://localhost:7000/", 
    serverDB = "http://localhost:7001/";

qhttp.read(serverSession)
.then(function(data){
        var json;
        try{
            json = JSON.parse(data);
            return json.id || json;
        }catch(e){
            return data;
        }
        })
.then(function(id){
        qhttp.read(serverDB+id).then(function(data){
            console.log(JSON.parse(data));}).then(null, console.log);
        })
.then(null, console.log);
