import { container } from 'tsyringe';
import { ICustomerRepository } from '@modules/customers/domain/repositories/ICustomerRepository';
import CustomerRespository from '@modules/customers/infra/typeorm/repositories/CustomerRepository';

container.registerSingleton<ICustomerRepository>(
  'CustomerRespository',
  CustomerRespository
);
