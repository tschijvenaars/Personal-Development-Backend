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
    const todo = await models.TodoItem.create({
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
    const todo = await models.TodoItem.findById(req.params.todolistid);

    let result = null;
    if (todo) {
      result = await todo.remove();
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
    const wishList = await models.WishItem.find();
    return res.json(wishList);
  } catch (err) {
    return res.send(err);
  }
});

router.post("/wishlist", async (req, res) => {
  try {
    const wish = await models.WishItem.create({
      shortDescription: req.body.shortDescription,
      longDescription: req.body.longDescription,
      date: req.body.date,
    });

    return res.json(wish);
  } catch (err) {
    return res.send(err);
  }
});

router.delete("/wishlist/:wishlistid", async (req, res) => {
  try {
    const wish = await models.WishItem.findById(req.params.wishlistid);
    if (wish) {
      result = await wish.remove();
    } else {
      return res.send("No item found");
    }

    return res.json(result);
  } catch (err) {
    return res.send(err);
  }
});

export default router;
