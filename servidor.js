const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

//Configuraciones(Settings)
app.set("puerto", 7000);

app.set("views", path.join(__dirname, './plantillaExpress/src/vistas'));
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile); //Renderiza paginas html a ejs.

//herramientas intermedias (middleware)
app.use(require("./plantillaExpress/src/rutas/solicitudes.js")); //Manejo de rutas.
app.use(express.static("./plantillaExpress/src/recursos")); //Archivos estaticos(css, js, imagenes).

//Servidor escuchando.
app.listen(app.get("puerto"), () =>
{
    console.log("servidor escuchando en el puerto: ", app.get("puerto"));
});