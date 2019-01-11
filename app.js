const express = require("express");
const app = express();

app.get("/", function(req, res) {
//   res.send("<h1>Welcome to the chat app!</h1>");
    res.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("The server is running!");
})
