const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 4003; 

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'contacto',
    user: 'root',
    password: ''
});

conexion.connect(function(error){
    if(error){
        console.error("Error al conectar a la base de datos: ", error);
    }else{
        console.log("Conexion exitosa a la base de datos"); 
    }
});
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static('public'))

app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname,"index.html"));
});
app.post('/validar', function(req, res){
    console.log('Listo');
    const datos = req.body;

  let nombre = datos.nombre;
  let email = datos.email;
  let mensaje = datos.mensaje;

  let buscar = "SELECT * FROM contacto WHERE email = ?";
  conexion.query(buscar, [email], function(error, rows){
    if(error){
        console.error("Error al buscar contacto:", error);
        res.status(500).send("Error interno del servidor");
    }else {
        if(rows.length > 0){
          console.log("No se puede registrar, contacto ya existe");
          res.status(400).send("No se puede registrar, contacto ya existente");
        } else {
            let registrar = "INSERT INTO contacto (nombre, email, mensaje) VALUES (?, ?, ?)";
            conexion.query(registrar, [ nombre, email, mensaje], function
            (error){
                if(error){
                    console.error("Error al registar usuario:", error);
                    res.status(500).send("Error interno del servidor");
                }else {
                    console.log('Datos almacenados');
                    res.status(200).send("Datos almacenados correctamente");
                }
            });
        }
    }
  });
});

app.listen(PORT, () => {
    console.log("Servidor corriendo en puerto", PORT);
});