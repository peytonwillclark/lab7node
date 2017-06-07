var fs = require('fs');
var path = require('path');
var extension ='.' + process.argv[3];
fs.readdir(process.argv[2], function (err, list) {
  if (err) {
    console.error(err);
  }else {
    for (var i =0; i < list.length; i++) {
        if (path.extname(list[i]) === extension){
          console.log(list[i]);
        }
       }
    }})