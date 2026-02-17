const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

// Serve all static files (css, js, img, favicon, etc.)
app.use(express.static(ROOT));

// Clean-URL support: /licenses  ->  licenses.html
app.get("/:page", (req, res, next) => {
  const file = path.join(ROOT, `${req.params.page}.html`);
  res.sendFile(file, (err) => {
    if (err) next(); // fall through to 404
  });
});

// Fallback: serve index.html for root and unknown routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(ROOT, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Cryft Labs site running on http://localhost:${PORT}`);
});
