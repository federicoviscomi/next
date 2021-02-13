import { Subjects, Publisher, OrderCancelledEvent } from '@procigatto/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
