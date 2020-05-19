const express = require('express');

const app = express();
// app.use(express.json());
app.get('/', (request, response) => {
    return response.send("Hello World!");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3333;
}

app.listen(port);