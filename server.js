import express from "express";
const app = express();
const port = process.env.PORT || 3000;

// Serwuj plik index.html
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/stronka.html");
});

app.listen(port, () => {
  console.log(`Server działa na porcie ${port}`);
});
