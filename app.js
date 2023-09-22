import express from "express";
import router from "./router.js";

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", router);

const port = 9001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
