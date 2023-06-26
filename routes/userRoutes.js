import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user
router.get("/", (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const data = UserService.getUsers();
          if (!data) {
              throw Error("Users not found");
          }
          res.data = data;
      }
      catch (error) {
          res.status(404);
          res.err = error;
      }
      finally {
          next();
      }
  }
});

router.get("/:id", (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const { id } = req.params;
          const data = UserService.getUserById(id);
          if (!data) {
              throw Error("User with this ID not found");
          }
          res.data = data;
      }
      catch (error) {
          res.status(404);
          res.err = error;
      }
      finally {
          next();
      }
  }
});

router.post("/", createUserValid, (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const data = UserService.createUser(req.body);
          if (!data) {
              throw Error("Create user failed");
          }
          res.data = data;
      }
      catch (error) {
          res.status(404);
          res.err = error;
      }
      finally {
          next();
      }
  }
});

router.put("/:id", updateUserValid, (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const { id } = req.params;
          const data = UserService.updateUser(id, req.body);
          if (!data) {
              throw Error("Update failed");
          }
          res.data = data;
      }
      catch (error) {
          res.status(404);
          res.err = error;
      }
      finally {
          next();
      }
  }
});

router.delete("/:id", (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const { id } = req.params;
          const data = UserService.deleteUser(id);
          if (!data) {
              throw Error("Delete user failed");
          }
          res.data = data;
      }
      catch (error) {
          res.status(404);
          res.err = error;
      }
      finally {
          next();
      }
  }
});

export { router };
