const express = require("express");
const router = express.Router();

const fs = require("fs");
const { getCssImportGoogleFont } = require("../lib/functions");

router.get("/", async function (req, res) {
  res.status(200).json({ message: "Get success" });
});

router.post("/", async function (req, res) {
  const data = req.body;

  let cssContent = generateCssContent(data.data);

  fs.writeFile("files/style.css", cssContent, (err) => {
    if (err) throw err;
    console.log("Le fichier style.css a été créé avec succès !");

    // Télécharger le fichier CSS généré
    res.download("files/style.css", "style.css", (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Erreur lors du téléchargement du fichier CSS");
      }
    });
  });
});

module.exports = router;

// TODO FUNCTION TREATMENT JSON USER FOR GENERATE CSS FILE
function generateCssContent(data) {
  console.log(data);

  const importGoogleFont = getCssImportGoogleFont(data.typography.fontFamily);

  let cssContent = `${importGoogleFont}
  
:root {
  --primary-color: ${data.colors.primary};
  --dark-primary-color: ${data.colors.dark};
  --light-primary-color: ${data.colors.light};
  --dark-variant1-color: ${data.colors.darkVariant1};
  --dark-variant2-color: ${data.colors.darkVariant2};
  --light-variant1-color: ${data.colors.lightVariant1};
  --light-variant2-color: ${data.colors.lightVariant2};
}

html, body {
  font-family: ${data.typography.fontFamily};
}

h1 {
  font-size: ${data.typography.h1.fontSize}px;
  font-weight: ${data.typography.h1.fontWeight};
}

h2 {
  font-size: ${data.typography.h2.fontSize}px;
  font-weight: ${data.typography.h2.fontWeight};
}

h3 {
  font-size: ${data.typography.h3.fontSize}px;
  font-weight: ${data.typography.h3.fontWeight};
}

h4 {
  font-size: ${data.typography.h4.fontSize}px;
  font-weight: ${data.typography.h4.fontWeight};
}

h5 {
  font-size: ${data.typography.h5.fontSize}px;
  font-weight: ${data.typography.h5.fontWeight};
}

h6 {
  font-size: ${data.typography.h6.fontSize}px;
  font-weight: ${data.typography.h6.fontWeight};
}

p {
  font-size: ${data.typography.p.fontSize}px;
  font-weight: ${data.typography.p.fontWeight};
}

button {
  border-radius: ${data.components.button.borderRadius}px;
  padding: ${data.components.button.padding}px ${
    data.components.button.padding * 3
  }px;
  font-size: ${data.components.button.fontSize}px;
  border: ${data.components.button.border}px;
}

.button-primary {
  background-color: var(--primary-color);
  color: white;
  cursor: pointer;
}

.button-primary:hover {
  background-color: var(--dark-primary-color);
}

.button-secondary {
  box-shadow: inset 0 0 0 2px var(--primary-color);
  background-color: transparent;
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button-secondary:hover {
  background-color: var(--primary-color);
  color: white;
}

.button-disabled {
  background-color: lightgray;
  color: white;
  cursor: not-allowed;
}

.button-xl {
  padding: 15px 40px;
  font-size: 20px;
}

.button-s {
  padding: 5px 15px;
  font-size: 12px;
}

input[type="text"] {
  border-radius: ${data.components.input.borderRadius}px;
  padding: ${data.components.input.padding}px;
  border: 1px solid var(--primary-color);
}

input[type="text"]:focus {
  outline: none;
  border: 2px solid var(--primary-color);
}

input[type="text"].input-success {
  border: 1px solid green !important;
}

input[type="text"].input-success:focus {
  border: 2px solid green;
}

input[type="text"].input-error {
  border: 1px solid red;
}

input[type="text"].input-error:focus {
  border: 2px solid red;
}

.card {
  border-radius: ${data.components.card.borderRadius}px;
  padding: ${data.components.card.padding}px;
}
`;

  return cssContent;
}
