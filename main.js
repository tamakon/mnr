const express = require('express'),
    http = require('http'),
    path = require('path'),
    ip = require('ip'),
    app = express(),
    port = 3000;
app.configure(function () {
    app.use(express.static(path.join(__dirname, 'dist')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

http.createServer(app).listen(port, function () {
    console.log("Express server has started up.");
    console.log("URL: http://" + ip.address() + ":" + port);
});