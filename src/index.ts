import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello!! tis is my first applications runs on ec2");
});

app.listen(80, () => {
  console.log("listening on 80");
});
