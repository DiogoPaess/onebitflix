import { Favorite } from "../models";

export const favoriteService = {
  findByUserId: async (userId: number) => {
    const favorites = await Favorite.findAll({
      attributes: [["userId", "userId"]],
      where: { userId },
      include: {
        association: "Course",
        attributes: [
          "id",
          "name",
          "synopses",
          ["thumbnail_url", "thumnailUrl"],
        ],
      },
    });
    return {
      userId,
      courses: favorites.map((favorite) => favorite.Course),
    };
  },
  create: async (userId: number, courseId: number) => {
    const favorite = await Favorite.create({
      userId,
      courseId,
    });

    return favorite;
  },
};
