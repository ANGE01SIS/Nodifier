import ex from "express";

const app = ex();

app.use(ex.json());

app.get("/", (req, res) => {
  res.send("This, is the main route of nodifier");
});

app.post("/notifications", (req, res) => {
  console.log(req.body);
});

const server = app.listen(0, () => {
  console.log(`Server active in: http://localhost:${server.address().port}`);
});
