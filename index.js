var app = require('express')();
var http = require('http').Server(app);
var socketio = require('socket.io')(http); //passing a server to socket io

app.get("/",function(request,response) {
	response.sendFile(__dirname + '/index.html');
});

socketio.on('connection',function(socket) {

	socketio.sockets.emit('connected',"A user connected");

	socket.on('chat',function(message) {
		socketio.emit('chat',message); // this is broadcasting to all sockts, need to change the var names for readability
	});

});

http.listen(3000,function() {
	console.log("Listening on 3000");
});

