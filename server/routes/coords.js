const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const logger = require("../logger");

router.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "../storage/storage.json"), (err, data) => {
    if(err) {
      logger.error(`GET: /coords: ${err}`);
      return res.sendStatus(500);
    }
    return res.status(200).send(data);
  });
});

router.post("/", (req, res) => {
  const circlePos = req.body;
  fs.writeFile(
    path.join(__dirname, "../storage/storage.json"),
    JSON.stringify(circlePos),
    (err) => {
      if (err) {
        logger.error(`POST: /coord: ${err}`);
        return res.sendStatus(500);
      }
    }
  );
  res.sendStatus(200);
});

module.exports = router;
