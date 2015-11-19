vi qhttp = require('q-io/http');

qhttp.read("http://localhost:7000")
.then(function(id){
        return qhttp.read("http://localhost:7001/"+id.toString());
            });
.then(function(data){
        console.log(data.toString());
        })
.done();
