// server.js
const express = require("express");
const next = require("next");

const dev = false; // cPanel = always production
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`Next.js app running on port ${port}`);
  });
});
