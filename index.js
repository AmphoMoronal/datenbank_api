const express = require("express");
const app = express();
const port = 3000;
const themeRouter = require("./routes/themes");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.use("/themes", themeRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

// Start server on the given port at the top
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});