const express = require('express'),
    http = require('http'),
    path = require('path'),
    ip = require('ip'),
    app = express();
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(express.static(path.join(__dirname, 'dist')));
});

app.configure('development', function () {
    app.use(express.errorHandler());
});

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server has started up.");
    console.log("URL: http://" + ip.address() + ":" + app.get('port'));
});