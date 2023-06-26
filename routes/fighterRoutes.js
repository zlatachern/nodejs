import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter
router.get("/", (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const data = FighterService.getFighters();
          if (!data) {
              throw Error("Fighters not found");
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
          const data = FighterService.getFighterById(id);
          if (!data) {
              throw Error("Fighter with this ID not found");
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

router.post("/", createFighterValid, (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const data = FighterService.createFighter(req.body);
          if (!data) {
              throw Error("Create fighter failed");
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

router.put("/:id", updateFighterValid, (req, res, next) => {
  if (res.err) {
      next();
  }
  else {
      try {
          const { id } = req.params;
          const data = FighterService.updateFighter(id, req.body);
          if (!data) {
              throw Error("Update fighter failed");
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
          const data = FighterService.deleteFighter(id);
          if (!data) {
              throw Error("Delete fighter failed");
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
