import mysql from "mysql";

// Création du pool de connexion
const pool = mysql.createPool({
  host: /* process.env.DB_HOST | */ "localhost",
  user: /*process.env.DB_USER | */ "root",
  // password: process.env.DB_PASSWORD | "",
  database: /*process.env.DB_DATABASE |*/ "todolist",
});

export default (queryString, params, callback) => {
  // Récupération d'une connexion depuis le pool
  pool.getConnection((error, connection) => {
    if (error) {
      console.error(`Erreur de connexion à la base de données ${error}`);
      callback(error);
      return;
    }
    console.log("Connection réussie à la base de données");

    // Envoi de la requête à la BDD
    connection.query(queryString, params, (error, result) => {
      // Remise de la connexion dans le pool
      connection.release();
      callback(error, result);
    });
  });
};
