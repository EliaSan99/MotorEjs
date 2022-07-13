const express = require('express');
const router = express.Router(); // Para manejar las rutas.
const path = require('path'); // Modulo interno.

var files = {root: path.join(__dirname, "../vistas")};  

router.get('/', (req, res) => 
{
    res.render("index.html", files);
});

router.get('/config', (req, res) => 
{
    res.render("config.ejs", files);
});

router.get('/repositorio', (req, res) => 
{
    res.render("repositorio", files);
});

router.get('/GCambios', (req, res) => 
{
    res.render("Gcambios.html", files);
});

router.get('/Gitignore', (req, res) => 
{
    res.render("Gitignore.html", files);
});

module.exports = router;