import AppError from '@shared/errors/AppError';
import { ICreateCustomer } from '../domain/models/ICreateCustomer';
import { ICustomer } from '../domain/models/ICustomer';
import { ICustomerRepository } from '../domain/repositories/ICustomerRepository';

class CreateCustomerService {
  constructor(private customersRepository: ICustomerRepository) {}

  public async execute({ name, email }: ICreateCustomer): Promise<ICustomer> {
    const emailExists = await this.customersRepository.findByEmail(email);

    if (emailExists) throw new AppError('Email address already used');

    const customer = await this.customersRepository.create({ name, email });

    return customer;
  }
}

export default CreateCustomerService;
