import { Router } from "express";
import models from "../models";

const router = Router();
const verifyToken = require("../middleware/auth.js").default;

router.use(verifyToken);

// HeartRate GET, GET id, POST, DELETE

router.get("/heartrate", async (req, res) => {
  try {
    const heartrate = await models.HeartRate.find();
    return res.json(heartrate);
  } catch (err) {
    return res.send(err);
  }
});

// router.get("/heartrate/:heartrateuser", async (req, res) => {
//   try {
//     const heartrate = await models.HeartRate.findOne({
//       user: req.params.heartrateuser,
//     });
//     return res.json(heartrate);
//   } catch (err) {
//     return res.send(err);
//   }
// });

router.post("/heartrate", async (req, res) => {
  try {
    const heartrate = await models.HeartRate.create({
      value: req.body.value,
      date: req.body.date,
    });

    return res.json(heartrate);
  } catch (err) {
    return res.send(err);
  }
});

router.delete("/heartrate/:heartrateid", async (req, res) => {
  try {
    const heartrate = await models.HeartRate.findById(req.params.heartrateid);

    let result = null;
    if (heartrate) {
      result = await heartrate.remove();
    } else {
      return res.send("No item found");
    }

    return res.json(result);
  } catch (err) {
    return res.send(err);
  }
});

// BloodPressure GET, GET id, POST, DELETE

router.get("/bloodpressure", async (req, res) => {
  try {
    const bloodpressure = await models.BloodPressure.find();
    return res.json(bloodpressure);
  } catch (err) {
    return res.send(err);
  }
});

router.post("/bloodpressure", async (req, res) => {
  try {
    const bloodpressure = await models.BloodPressure.create({
      value: req.body.value,
      date: req.body.date,
    });

    return res.json(bloodpressure);
  } catch (err) {
    return res.send(err);
  }
});

router.delete("/bloodpressure/:bloodpressureid", async (req, res) => {
  try {
    const bloodpressure = await models.BloodPressure.findById(
      req.params.bloodpressureid
    );
    if (heartrate) {
      result = await bloodpressure.remove();
    } else {
      return res.send("No item found");
    }

    return res.json(result);
  } catch (err) {
    return res.send(err);
  }
});

// Weight GET, GET id, POST, DELETE

router.get("/weight", async (req, res) => {
  try {
    const weight = await models.Weight.find();
    return res.json(weight);
  } catch (err) {
    return res.send(err);
  }
});

router.post("/weight", async (req, res) => {
  try {
    const weight = await models.Weight.create({
      value: req.body.value,
      date: req.body.date,
    });

    return res.json(weight);
  } catch (err) {
    return res.send(err);
  }
});

router.delete("/weight/:weightid", async (req, res) => {
  try {
    const weight = await models.Weight.findById(req.params.weightid);

    let result = null;
    if (weight) {
      result = await weight.remove();
    } else {
      return res.send("No item found");
    }

    return res.json(result);
  } catch (err) {
    return res.send(err);
  }
});

export default router;
