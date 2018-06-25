//const dbManager = require('./dbManager');
const initRoutes = require("../app/routes");
const app = require('express')();
const http = require('http').Server(app);
const io= require('socket.io')(http);

app.get('/',function(req,res){
  res.sendfile('index.html');
})

//when ever someone connects this will be executed
io.on('connection',function(socket){
  console.log("user connected");

  //when ever someone connects this will be executed
  socket.on('disconnect',function(){
    console.log("user disconnected");
  })
})

http.listen(5000, function() {
  console.log('Server listening on :5000');
});


//dbManager();
initRoutes(app);


