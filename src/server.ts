import express from "express";
import { messageRoutes } from "./http/routes/message-routes";
import cors from "cors";
import { createServer } from "http";

export const app = express();
export const server = createServer(app);

import "./http/routes/ws-message-routes";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("dist"));

// routes
app.use(messageRoutes);

server.listen(3000, () => {
  console.info("Server is running on port 3000");
});
