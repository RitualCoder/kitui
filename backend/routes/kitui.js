const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  // TODO FUNCTION TREATMENT JSON USER FOR GENERATE CSS FILE
  res.status(200).json({ message: "Get kitui successfully" });
});

module.exports = router;