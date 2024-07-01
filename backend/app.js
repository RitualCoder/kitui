const express = require("express");
const cors = require("cors");
const app = express();

// Configurez les options CORS
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const kituiRoute = require("./routes/kitui");

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", kituiRoute);

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}`);
});
