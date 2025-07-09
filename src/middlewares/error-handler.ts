import { NextFunction, Request, Response } from "express";
import { AppError } from "@/utils/AppError";
import { ZodError } from "zod";

export function errorHandler(
  error: any,
  request: Request,
  response: Response,
  _: NextFunction
) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      message: error.message,
    });
  }

  if (error instanceof ZodError) {
    return response
      .status(400)
      .json({ message: "validation error", issues: error.issues });
  }

  return response.status(500).json({
    message: error.message || "Internal server error",
  });
}
