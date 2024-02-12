import { Request, Response } from "express";
import { prisma } from "../../libs/prisma";
import { messagePubSub } from "../../utils/message-pub-sub";

export async function sendMessage(req: Request, res: Response) {
  const { authorId, channelId, content } = req.body;

  const message = await prisma.message.create({
    data: {
      authorId,
      channelId,
      content,
    },
  });

  messagePubSub.publish(
    channelId,
    JSON.stringify({
      authorId,
      channelId,
      content,
    })
  );

  return res.status(200).send(message);
}
