const express = require('express')
const app = express()
const port = 3000

app.get('/prueba', (req, res) =>{
    res.send (' La vida es como un banano si no te comes el tuyo se lo quitas a tu mejor amiga. ')
})
app.listen(port, ()=>{
    console.log('La aplicacion se esta ejecutando por el puerto ' + port)
} )