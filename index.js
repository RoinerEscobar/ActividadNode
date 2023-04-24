const express = require("express");
const app = express();
const port = 5000;
const fs = require('fs');

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.post("/formulario", (req, res) => {
    console.log(req.body);
    const{id,nombre,apellido, Titulo, Autor, Editorial, Año}=req.body
    if (!nombre || !apellido) return res.redirect('/error.html')
    res.send(`Datos Enviados con Exito...`);
    fs.writeFile(`./public/data/id_${id}.txt`,`${id}, ${nombre}, ${apellido}, ${Titulo}, ${Autor}, ${Editorial}, ${Año}`,(error)=>{
        if (error) {
            console.log(`Error: ${error}`)
        }
    } )

});




app.listen(port, () => {console.log("listo! ");});