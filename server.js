const express = require("express");

const pool = require("./db");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const users = await pool.query("SELECT * FROM clients");
    res.send(users);
  } catch (error) {
    res.send(error);
    console.log("hola")
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
