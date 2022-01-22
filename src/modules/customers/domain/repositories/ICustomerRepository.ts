import { ICustomer } from '../models/ICustomer';
import { ICreateCustomer } from '../models/ICreateCustomer';

export interface ICustomerRepository {
  findByName(name: string): Promise<ICustomer | undefined>;

  findById(id: string): Promise<ICustomer | undefined>;

  findByEmail(email: string): Promise<ICustomer | undefined>;

  create(data: ICreateCustomer): Promise<ICustomer>;

  save(customer: ICustomer): Promise<ICustomer>;
}
