import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.send("Hello world");
})

app.listen(3333);