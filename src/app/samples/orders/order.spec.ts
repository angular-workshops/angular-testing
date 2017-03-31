import { Customer } from './customer';
import { Order } from './order';

describe('Order', () => {
  let order, customer;

  beforeEach(() => {
    customer = new Customer();
    order = new Order(customer);
  });

  describe('addItem(name, cost)', () => {
    it('should not discount unpreferred customers');
    it('should give preferred customers a 10% discount');
  });
});
