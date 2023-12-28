var http = require('http');
var manejador = function(solicitud, respuesta) {
  var i = 0;
  var interval = setInterval(function() {
    respuesta.write(i + '-->');
    i++;
    if (i > 10) {
      clearInterval(interval);
      respuesta.end();
    }
  }, 1000); // Cada 1 segundo
};

var servidor = http.createServer(manejador);
servidor.listen(8080);
