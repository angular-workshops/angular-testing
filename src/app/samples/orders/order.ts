import { Customer } from './customer';

interface Item {
  name: string;
  cost: number;
}

export class Order {

  items: Item[] = [];

  constructor(private customer: Customer) {}

  addItem(name: string, cost: number) {
    if (this.customer.isPreferred()) {
      cost *= 0.9;
    }
    this.items.push({ name, cost });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.cost, 0);
  }
}
