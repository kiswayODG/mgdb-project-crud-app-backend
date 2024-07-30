const mongoose = require("mongoose");

const EtudiantSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, "Veuillez enter le nom de l'étudiant"],
    },
    prenom: {
      type: String,
      required: [true, "Veuillez enter le prenom de l'étudiant"],
    },

    matricule: {
      type: Number,
      required: [true, "Veuillez préciser le matricule de l'étudiant"],
    },

    niveau: {
      type: String,
      required: true,
      default: "Licence 1",
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Etudiant = mongoose.model("Etudiant", EtudiantSchema);

module.exports = Etudiant;