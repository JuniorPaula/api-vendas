import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../infra/typeorm/entities/Customer';
import CustomerRespository from '../infra/typeorm/repositories/CustomerRepository';

interface IRequest {
  id: string;
}

class ShowCustomerService {
  public async execute({ id }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRespository);
    const customer = await customersRepository.findById(id);

    if (!customer) throw new AppError('Customer not found');

    return customer;
  }
}

export default ShowCustomerService;
