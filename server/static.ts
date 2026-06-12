import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // serve index.html only for the root SPA route; return 404 for everything else
  app.use("/{*path}", (req, res) => {
    if (req.path === "/") {
      res.sendFile(path.resolve(distPath, "index.html"));
    } else {
      res.status(404).sendFile(path.resolve(distPath, "index.html"));
    }
  });
}
