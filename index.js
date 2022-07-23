require("dotenv").config(); // {path: path/filename}

// Start server
const express = require("express");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 4000;

// Nuestro servidor va a poder entender las peticiones POST (req body),
// va a poder obtener los datos enviados por el cliente
app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Server run on port: ${port}`));

// Tool used by this project: http://knexjs.org/
