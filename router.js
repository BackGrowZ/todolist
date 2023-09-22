import express from "express";
import * as taskController from "./controllers/taskController.js";

const router = express.Router();

// affichier la liste des tâches sur la page d'accueil
router.get("/", taskController.renderListPage);

// afficher la page d'ajout de tâche sur la route /add
router.get("/add", (req, res) => {
  res.render("add");
});

// ajouter une tâche dans la base de données
router.post("/add", taskController.addTask);

router.post("/delete/:id", taskController.deleteTask);

export default router;
