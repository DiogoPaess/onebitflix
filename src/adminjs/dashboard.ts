import AdminJS, { PageHandler } from "adminjs";
import { Course, Episode, Category, User } from "../models";

export const dashboardOptions: {
  handler?: PageHandler;
  component?: string;
} = {
  component: AdminJS.bundle("./components/Dashboard"),
  handler: async (req, res, context) => {
    const courses = await Course.count();
    const episodes = await Episode.count();
    const categories = await Category.count();
    const standarUsers = await User.count({ where: { role: "user" } });

    res.json({
      Cursos: courses,
      Episódios: episodes,
      Categorias: categories,
      Usuários: standarUsers,
    });
  },
};
