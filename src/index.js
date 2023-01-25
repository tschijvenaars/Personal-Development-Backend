import './loadEnv';
import cors from "cors";
import express from "express";

import models, { connectDb } from "./models";
import routes from "./routes";

const app = express();

// * Application-Level Middleware * //
// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Routes * //

app.use("/api", routes.user);
app.use("/api/lists", routes.lists)
app.use("/api/health", routes.health);
app.use("/api/weather", routes.weather);

// * Start * //

const eraseDatabaseOnSync = false;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Weather.deleteMany({}),
      models.BloodPressure.deleteMany({}),
      models.HeartRate.deleteMany({}),
      models.Weight.deleteMany({}),
      models.WishItem.deleteMany({}),
      models.TodoItems.deleteMany({}),
    ]);
  }

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});
