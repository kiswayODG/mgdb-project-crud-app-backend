const Etudiant = require("../models/etudiant.model");

const getEtudiants = async (req, res) => {
  try {
    const etudiants = await Etudiant.find({});
    res.status(200).json(etudiants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEtudiant = async (req, res) => {
  try {
    const { id } = req.params;
    const etudiant = await Etudiant.findById(id);
    res.status(200).json(etudiant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createEtudiant = async (req, res) => {
  try {
    const etudiant = await Etudiant.create(req.body);
    res.status(200).json(etudiant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEtudiant = async (req, res) => {
  try {
    const { id } = req.params;

    const etudiant = await Etudiant.findByIdAndUpdate(id, req.body);

    if (!etudiant) {
      return res.status(404).json({ message: "Etudiant non trouvé" });
    }

    const updatedEtudiant = await Etudiant.findById(id);
    res.status(200).json(updatedEtudiant);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEtudiant = async (req, res) => {
  try {
    const { id } = req.params;

    const etudiant = await Etudiant.findByIdAndDelete(id);

    if (!etudiant) {
      return res.status(404).json({ message: "Etudiant non trouvé" });
    }

    res.status(200).json({ message: "Etudiant supprimé avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getEtudiants,
  getEtudiant,
  createEtudiant,
  updateEtudiant,
  deleteEtudiant,
};
