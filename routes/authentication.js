const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router(); 
const userSchema = require("../models/user");
router.post('/signup', async (req, res) => {
    const { usuario, correo, clave } = req.body;
    const user = new userSchema({
        usuario: usuario,
        correo: correo,
        clave: clave
    });
    user.clave = await user.encryptClave(user.clave);
    await user.save(); //save es un método de mongoose para guardar datos en MongoDB 
    //res.json(user);
    res.json(user);
    message: "Usuario guardado."
});
module.exports = router;
