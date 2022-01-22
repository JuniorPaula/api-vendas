import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Customer from '../infra/typeorm/entities/Customer';
import CustomerRespository from '../infra/typeorm/repositories/CustomerRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  public async execute({ name, email }: IRequest): Promise<Customer> {
    const customersRepository = getCustomRepository(CustomerRespository);
    const emailExists = await customersRepository.findByEmail(email);

    if (emailExists) throw new AppError('Email address already used');

    const customer = customersRepository.create({ name, email });

    await customersRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
