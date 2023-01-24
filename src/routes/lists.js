import { Router } from "express";
import models from "../models";

const router = Router();
const verifyToken = require("../middleware/auth.js").default;

router.use(verifyToken);

// ToDoList GET, GET id, POST, DELETE

router.get("/todolist", async (req, res) => {
    try {
        const todoList = await models.TodoItem.find();
        return res.json(todoList);
    } catch (err) {
        return res.send(err);
    }
});

router.post("/todolist", async (req, res) => {
    try {
        const todoItem = await models.TodoItem.create({
            shortDescription: req.body.shortDescription,
            longDescription: req.body.longDescription,
            date: req.body.date,
        });

        return res.json(todo);
    } catch (err) {
        return res.send(err);
    }
});

router.delete("/todolist/:todolistid", async (req, res) => {
    try {
        const todoItem = await models.TodoItem.findById(req.params.todolistid);

        let result = null;
        if (todoItem) {
            result = await todoItem.remove();
        } else {
            return res.send("No item found");
        }

        return res.json(result);
    } catch (err) {
        return res.send(err);
    }
});

// WishList GET, GET id, POST, DELETE

router.get("/wishlist", async (req, res) => {
    try {
        const heartrate = await models.HeartRate.find();
        return res.json(heartrate);
    } catch (err) {
        return res.send(err);
    }
});

router.post("/bloodpressure", async (req, res) => {
    try {
        const bloodpressure = await models.BloodPressure.create({
            bpvalue: req.body.bpvalue,
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

export default router;
