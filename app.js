const express = require('express')
const app = express()
const port = 3000
const puerto = process.env.PORT ; 
const path = require('path');
console.log('Escuchando')
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'login.html'));
});

app.listen(puerto || 3000, function() {
    console.log("Servidor corriendo en el puerto 3000");
});
