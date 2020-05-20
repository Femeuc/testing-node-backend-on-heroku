const express = require('express');

const { Pool, Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'teste1',
    password: '',
    port: 5432,
})

const app = express();
app.use(express.json());
app.get('/', function(req, res) {
client.connect()
client.query('SELECT * FROM test', (err, resq) => {
  res.json({
      response: resq.rows[0].name
  });
  console.log(err, resq)
  client.end()
})
});

app.post('/test', (request, response) => {
    client.connect()
    client.query("INSERT INTO test (name) VALUES ('" + request.body.name + "')");
    client.end();
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3333;
}

app.listen(port);