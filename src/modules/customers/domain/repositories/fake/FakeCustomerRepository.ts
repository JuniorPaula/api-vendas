import { v4 as uuidv4 } from 'uuid';
import { ICreateCustomer } from '@modules/customers/domain/models/ICreateCustomer';
import { ICustomerRepository } from '@modules/customers/domain/repositories/ICustomerRepository';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';

class FakeCustomerRespository implements ICustomerRepository {
  private customers: Customer[] = [];

  public async create({ name, email }: ICreateCustomer): Promise<Customer> {
    const customer = new Customer();

    customer.id = uuidv4();
    customer.name = name;
    customer.email = email;

    this.customers.push(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    const findIndex = this.customers.findIndex(
      (findCustomer) => findCustomer.id
    );

    this.customers[findIndex] = customer;

    return customer;
  }

  public async findByName(name: string): Promise<Customer | undefined> {
    const customers = this.customers.find((customer) => customer.name === name);
    return customers;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customers = this.customers.find((customer) => customer.id === id);
    return customers;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customers = this.customers.find(
      (customer) => customer.email === email
    );
    return customers;
  }
}

export default FakeCustomerRespository;
