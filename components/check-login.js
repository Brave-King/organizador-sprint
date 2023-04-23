const mysql = require('mysql');

// Crear la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'BDGeeks'
});

// Realizar la consulta
connection.query('SELECT * FROM geeks_user WHERE geek_user = ? AND geek_pass = MD5(?)', [username, password], function (error, results, fields) {
  if (error) throw error;
  console.log('Los resultados de la consulta son: ', results);
});

// Cerrar la conexión
connection.end();
