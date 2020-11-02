import { AggregateRoot } from "@nestjs/cqrs";

import { IItemInterface } from "./item.interface";

export class ItemModel extends AggregateRoot {
  constructor(private readonly item: IItemInterface) {
    super();
  }

  heavyWork() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async orderOnItem(
    orderTransactionGUID: string,
    userID: string,
    amount: number
  ) {
    console.log(`Working on ${orderTransactionGUID}`);
    await this.heavyWork();
    console.log(`Finished on ${orderTransactionGUID}`);
  }
}
