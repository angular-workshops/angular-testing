import { Customer } from './customer';
import { Order } from './order';

describe('Order', () => {
  let order: Order, customer: Customer;

  beforeEach(() => {
    customer = new Customer();
    order = new Order(customer);
  });

  describe('addItem(name, cost)', () => {
    it('should not discount unpreferred customers', () => {
      spyOn(customer, 'isPreferred').and.returnValue(false);
      order.addItem('Angular', 100);
      expect(customer.isPreferred).toHaveBeenCalled();
      expect(order.items[0]).toEqual({ name: 'Angular', cost: 100 });
    });

    it('should give preferred customers a 10% discount', () => {
      spyOn(customer, 'isPreferred').and.returnValue(true);
      order.addItem('Angular', 100);
      expect(customer.isPreferred).toHaveBeenCalled();
      expect(order.items[0]).toEqual({ name: 'Angular', cost: 90 });
    });
  });
});
