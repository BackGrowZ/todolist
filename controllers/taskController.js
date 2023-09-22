// controllers/taskController.mjs
import * as taskModel from "../models/taskModel.js";

export const deleteTask = (req, res) => {
  const taskId = req.params.id;

  taskModel.deleteTask(taskId, (err, result) => {
    if (err) {
      // Gérer les erreurs, par exemple, afficher un message d'erreur
      console.error(err);
      res.status(500).send("Erreur lors de la suppression de la tâche.");
      return;
    }

    // Rediriger vers la liste des tâches après la suppression
    res.redirect("/");
  });
};

export const addTask = (req, res) => {
  const task = req.body.task;

  taskModel.addTask(task, (err, result) => {
    if (err) {
      // Gérer les erreurs, par exemple, afficher un message d'erreur
      console.error(err);
      res.status(500).send("Erreur lors de l'ajout de la tâche.");
      return;
    }

    // Rediriger vers la liste des tâches après l'ajout
    res.redirect("/");
  });
};

export const renderListPage = (req, res) => {
  taskModel.getTasks((err, tasks) => {
    if (err) {
      // Gérer les erreurs, par exemple, afficher un message d'erreur
      console.error(err);
      res.status(500).send("Erreur lors de la récupération des tâches.");
      return;
    }

    // Afficher la liste des tâches
    res.render("index", { tasks });
  });
};
