import { Response } from "express";
import { AuthenticadedRequest } from "../middlewares/auth";
import { likeService } from "../services/likeservice";

export const likesController = {
  save: async (req: AuthenticadedRequest, res: Response) => {
    const userId = req.user!.id;
    const { courseId } = req.body;

    try {
      const like = await likeService.create(userId, courseId);
      res.status(201).json(like);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
