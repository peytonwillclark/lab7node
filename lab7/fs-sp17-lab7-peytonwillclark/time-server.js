var net = require('net');

var server = net.createServer(function(socket) {
    var date = new Date();
    function padNumber(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return String(num);
        }
    }
    var dateString = '';
    dateString += date.getFullYear() + '-';
    dateString += padNumber(date.getMonth() + 1) + '-';
    dateString += padNumber(date.getDate()) + ' ';
    dateString += padNumber(date.getHours()) + ':';
    dateString += padNumber(date.getMinutes()) + '\n';
   
    socket.end(dateString);
});
server.listen(process.argv[2]);