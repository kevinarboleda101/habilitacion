const db = require('./database');
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log('estamos en el puerto'+ port);

});

db.conectar();

app.get('/', (req, res)=>{
  res.send('conectado :)');

});

app.get('/autor', (req, res)=>{
    res.send('esta es la ruta');
  
  });
  app.get('/publicaciones', (req, res)=>{
    db.traer();
    res.send('Seccion de publicaciones');
});
app.post('/', (request, response)=>{
    db.guardar(request.body);
    console.log(request.body)
     response.send('este es el post' + request.body.nombre);
 });
