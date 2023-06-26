import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    try {
      // TODO: Implement login action (get the user if it exist with entered credentials)
      const userData = req.body;
      const data = AuthService.login(userData);
      if (!data) {
          throw Error("Login failed");
      }
      res.data = data;
      } catch (err) {
        res.err = err;
      } finally {
        next();
      }
  },
  responseMiddleware
);

export { router };
