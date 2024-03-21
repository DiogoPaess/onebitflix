import { Response } from "express";
import { AuthenticadedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
  watching: async (req: AuthenticadedRequest, res: Response) => {
    const { id } = req.user!;

    try {
      const watching = await userService.getKeepWatchingList(id);
      return res.json(watching);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
