var express = require('express');
var app = express();
// var bodyParser  = require('body-parser');
// var routes = require('./app/routes/route');
//var defaultRoute = require('./app/routes/defaultRoute');

//conexão com banco
//var uri = process.env.MONGODB_URI || 'mongodb://localhost/casamento-app';
//connection.connect(uri);

//STATIC SOURCES'mongodb://localhost/rpgmanager'
app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));
// var favicon = require('serve-favicon');
//app.use(favicon(__dirname + '/images/favicon.png'));

//DEFINE PAGES
app.get('/', function(req, res){
    res.sendFile('index.html', { root: __dirname  } );
});
app.get('/index.html', function(req, res){
    res.sendFile('index.html', { root: __dirname  } );
});
app.get('/conveniencia.html', function(req, res){
    res.sendFile('conveniencia.html', { root: __dirname  } );
});
app.get('/eventos.html', function(req, res){
    res.sendFile('eventos.html', { root: __dirname  } );
});
app.get('/hospitalidade.html', function(req, res){
    res.sendFile('hospitalidade.html', { root: __dirname  } );
});
app.get('/politicas.html', function(req, res){
    res.sendFile('politicas.html', { root: __dirname  } );
});
app.get('/infraestrutura.html', function(req, res){
    res.sendFile('infraestrutura.html', { root: __dirname  } );
});
app.get('/alimentacao.html', function(req, res){
    res.sendFile('alimentacao.html', { root: __dirname  } );
});


//defaultRoute(app);

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 8080;
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('my app is listening at http://%s:%s', host, port);
});
