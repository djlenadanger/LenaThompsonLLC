import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Serve the services pricing page at /services
  app.get("/services", (req, res) => {
    const servicesFile =
      process.env.NODE_ENV === "production"
        ? path.join(process.cwd(), "dist/public/services.html")
        : path.join(process.cwd(), "client/public/services.html");
    res.sendFile(servicesFile);
  });

  return httpServer;
}
