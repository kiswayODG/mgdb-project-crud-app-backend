const express = require("express");
const Etudiant = require("../models/etudiant.model.js");
const router = express.Router();
const {getEtudiants, getEtudiant, createEtudiant, updateEtudiant, deleteEtudiant} = require('../controllers/etudiant.controller.js');


router.get('/', getEtudiants);
router.get("/:id", getEtudiant);

router.post("/", createEtudiant);


router.put("/:id", updateEtudiant);


router.delete("/:id", deleteEtudiant);




module.exports = router;