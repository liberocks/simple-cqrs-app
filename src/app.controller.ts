import { Controller, Post } from "@nestjs/common";
import { EventBus, QueryBus } from "@nestjs/cqrs";
import * as uuid from "uuid";

import { OrderEvent } from "./order/order.events";

@Controller()
export class AppController {
  constructor(
    private readonly eventBus: EventBus,
    private queryBus: QueryBus
  ) {}

  @Post()
  async bid(): Promise<object> {
    const orderTransactionGUID = uuid.v4();

    this.eventBus.publish(
      new OrderEvent(
        orderTransactionGUID,
        "Daniel Trimson",
        "Samsung LED TV",
        50000
      )
    );

    return {
      id: orderTransactionGUID,
      status: "PENDING",
    };
  }
}
