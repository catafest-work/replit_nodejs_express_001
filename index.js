// import express from "express";

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.status(200).send({ message: "Hello, World!" });
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

import express from "express";
import { todos, nextTodoId } from "./todos.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
