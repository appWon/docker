import todos from "../controlls/todos";

export const routes = (app) => {
  app.get("/", (req, res) => res.send("테스트"));

  app.get("/todos", todos.read);
  app.post("/todos", todos.write);
};
