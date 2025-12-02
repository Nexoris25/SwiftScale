const { createServer } = require('http');
const path = require('path');


const app = require('./.next/standalone/server.js');


const handler = app.getRequestHandler();

const port = process.env.PORT || 3000;

createServer((req, res) => {
  app.getRequestHandler()(req, res);
}).listen(port, () => {
  console.log(`Next.js standalone server running on port ${port}`);
});
