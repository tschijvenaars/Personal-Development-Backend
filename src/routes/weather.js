import { Router } from "express";
import models from "../models";

const router = Router();
const verifyToken = require("../middleware/auth.js").default;

router.use(verifyToken);

router.get("/", async (req, res) => {
  try {
    const weather = await models.Weather.find();
    return res.json(weather);
  } catch (err) {
    return res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const weather = await models.Weather.create({
      humidity: req.body.humidity,
      temperature: req.body.temperature,
      wind: req.body.wind,
      date: req.body.date,
    });

    return res.json(weather);
  } catch (err) {
    return res.send(err);
  }
});

router.delete("/:weatherId", async (req, res) => {
  try {
    const weather = await models.Weather.findById(req.params.weatherId);

    let result = null;
    if (weather) {
      result = await weather.remove();
    } else {
      return res.send("No item found");
    }

    return res.json(result);
  } catch (err) {
    return res.send(err);
  }
});

export default router;
