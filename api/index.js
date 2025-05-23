const express = require('express')
const app = express()
var cors = require('cors')
const mysql = require('mysql2')
const port = 3000


app.use(cors())
app.use(express.json())




const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datosprecios'

});

connection.addListener('error', (err) => {
  console.log(err);
});



app.get('/servicios', (req, res) => {            
  const query = 'SELECT * FROM datosabackend' 

  connection.query(query, function (error, results) 
  { if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
  } else res.send(results)
})});






app.get('/servicios/:id', (req, res) => {
  const TypeId = req.params.id;
  const query = 'SELECT * FROM datosabackend WHERE typeId = ?';

  connection.query(query, [TypeId], function (error, results) {
    if (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error executing query');
    } else {
      res.send(results);
    }
  });

})






app.listen(port, () => {
  console.log(`Example app listening on port ${port} http://localhost:${port}`)
})



