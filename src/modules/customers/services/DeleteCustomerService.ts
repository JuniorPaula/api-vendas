import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustomerRespository from '../infra/typeorm/repositories/CustomerRepository';

interface IRequest {
  id: string;
}

class DeleteCustomerService {
  public async execute({ id }: IRequest): Promise<void> {
    const customersRepository = getCustomRepository(CustomerRespository);
    const customer = await customersRepository.findById(id);

    if (!customer) throw new AppError('Customer not found');

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
