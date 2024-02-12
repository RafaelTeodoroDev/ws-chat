import { messagePubSub } from "../../utils/message-pub-sub";
import { websocket } from "../../ws";

websocket.ws("/:channelId/messages", async (ws, req) => {
  const { channelId } = req.params;

  messagePubSub.subscribe(Number(channelId), (message) => {
    ws.send(message);
  });
});
