import websocketExpress from "express-ws";
import { app, server } from "../server";

export const { app: websocket } = websocketExpress(app, server);
