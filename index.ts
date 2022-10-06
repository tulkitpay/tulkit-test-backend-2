import express from "express";
import * as controller from "./src/controllers";
const app = express();
app.use(express.json());
const PORT = process.env.HTTP_PORT || 3000;

// Your code starts here. Placeholders for .get and .post are provided for your convenience.

app.get("/todos", controller.getToDos);

app.get("/users", controller.getUsers);

app.listen(PORT).on("listening", () => {
  console.info("Listening on port", PORT);
});

export default app;
