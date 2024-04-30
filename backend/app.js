const express = require("express");
const app = express();

const kituiRoute = require("./routes/kitui");

app.use(express.json());
app.use("/api/kitui", kituiRoute);

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}`);
});