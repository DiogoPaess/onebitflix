import { Response } from "express";
import { AuthenticadedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {
  show: async (req: AuthenticadedRequest, res: Response) => {
    try {
      const currentUser = req.user!;
      return res.json(currentUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  update: async (req: AuthenticadedRequest, res: Response) => {
    const { id } = req.user!;
    const { firstName, lastName, phone, email, birth } = req.body;

    try {
      const updatedUser = await userService.update(id, {
        firstName,
        lastName,
        phone,
        email,
        birth,
      });

      return res.json(updatedUser);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  updatePassword: async (req: AuthenticadedRequest, res: Response) => {
    const user = req.user!;
    const { currentPassword, newPassword } = req.body;

    user.checkPassword(currentPassword, async (err, isSame) => {
      try {
        if (err) return res.status(400).json({ message: err.message });
        if (!isSame)
          return res.status(400).json({ message: "Verification error" });

        await userService.updadePassword(user.id, newPassword);
        return res.status(204).send();
      } catch (err) {
        if (err instanceof Error) {
          return res.status(400).json({ message: err.message });
        }
      }
    });
  },

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
