const express = require("express");
const mongoose = require("mongoose");
const Etudiant = require("./models/etudiant.model.js");
const etudiantRoute = require("./routes/etudiant.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

dotenv.config();

// routes
app.use("/api/etudiant", etudiantRoute);


app.get("/", (req, res) => {
  res.send("Serveur d'API Node en cours d'execution !");
});


mongoose
.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
