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
   
    router.post("/login", async (req, res) => {
        
        const { error } = userSchema.validate(req.body.correo, req.body.clave);
        if (error) return res.status(400).json({ error: error.details[0].message });
        
        const user = await userSchema.findOne({ correo: req.body.correo });
      
        if (!user) return res.status(400).json({ error: "Usuario no encontrado" });
        
      
        const validPassword = await bcrypt.compare(req.body.clave, user.clave);
        if (!validPassword)
            return res.status(400).json({ error: "Clave no válida" });
        res.json({
            error: null,
            data: "Bienvenido(a)",
        });
    });
    user.clave = await user.encryptClave(user.clave);
    await user.save(); 
    //res.json(user);
    res.json(user);
    message: "Usuario guardado."
});
module.exports = router;
