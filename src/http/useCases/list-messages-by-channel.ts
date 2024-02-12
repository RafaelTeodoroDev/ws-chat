import { prisma } from "../../libs/prisma";
import { Request, Response } from "express";

export async function listMessages(req: Request, res: Response) {
  const { channelId } = req.body;

  const messages = await prisma.message.findMany({
    where: {
      channelId,
    },
  });

  return res.status(200).send(messages);
}
