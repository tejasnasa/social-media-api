import { Request, Response, NextFunction } from "express";
import { loginSchema } from "./validationSchemas";
import { z } from "zod";
import { ServiceResponse } from "../models/serviceResponse";

const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = {
        validationErrors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      };

      res
        .status(400)
        .json(ServiceResponse.badrequest("Validation error", errors));
      return;
    }
    res.status(500).json(ServiceResponse.failed("Internal server error"));
    return;
  }
};

export default validateLogin;
