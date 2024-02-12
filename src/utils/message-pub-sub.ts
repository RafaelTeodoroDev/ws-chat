type Message = string;
type Subscriber = (message: Message) => void;

class MessagePubSub {
  private topics: Record<number, Subscriber[]> = {};

  public subscribe(channelId: number, subscriber: Subscriber) {
    if (!this.topics[channelId]) {
      this.topics[channelId] = [];
    }

    this.topics[channelId].push(subscriber);
  }

  public publish(channelId: number, message: Message) {
    if (!this.topics[channelId]) {
      return;
    }

    for (const subscriber of this.topics[channelId]) {
      subscriber(message);
    }
  }
}

export const messagePubSub = new MessagePubSub();
