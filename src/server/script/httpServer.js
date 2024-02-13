import path from "path";

export default (port, app, _dirname) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "../public/html/index.html"));
  });

  app.listen(port);
  console.log(`Server started at http://localhost:${port}`);

  return app;
};
