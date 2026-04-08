require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routers/authentication");  

const app = express();


app.use(cors());          
app.use(express.json());  
app.use("./api", authRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.error(err));


app.use("/api/animals", require("./routes/animalRoutes"));


app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
