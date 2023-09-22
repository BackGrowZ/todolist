import query from "../database.js";

// Récupérer la liste des tâches depuis la base de données
export const getTasks = (callback) => {
  const sql = "SELECT * FROM tasks";

  query(sql, [], (err, tasks) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, tasks);
  });
};

// Ajouter une nouvelle tâche dans la base de données
export const addTask = (task, callback) => {
  const sql = "INSERT INTO tasks (task) VALUES (?)";

  query(sql, [task], (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

// Supprimer une tâche de la base de données
//export const deleteTask = (taskId, callback) => {};

export const deleteTask = (taskId, callback) => {
  const sql = "DELETE FROM tasks WHERE id = ?";

  query(sql, [taskId], (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};
