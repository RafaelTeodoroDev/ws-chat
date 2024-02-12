import { Router } from "express";
import { sendMessage } from "../useCases/create-message";
import { listMessages } from "../useCases/list-messages-by-channel";

export const messageRoutes = Router();

messageRoutes.post("/messages", sendMessage);
messageRoutes.get("/messages", listMessages);
