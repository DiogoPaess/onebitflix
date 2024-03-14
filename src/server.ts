import express from "express";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";
import { router } from "./router";

const app = express();

app.use(express.static("public"));

app.use(express.json());

app.use(adminJs.options.rootPath, adminJsRouter);

app.use(router);

const PORT = process.env.port || 3000;

app.listen(PORT, async () => {
  sequelize.authenticate().then(() => {
    console.log("DB connection successfull.");
  });

  console.log(`Server started successfuly at port ${PORT}.`);
});
