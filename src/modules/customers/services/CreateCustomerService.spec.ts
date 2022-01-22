import 'reflect-metadata';
import FakeCustomerRepository from '@modules/customers/domain/repositories/fake/FakeCustomerRepository';
import AppError from '@shared/errors/AppError';
import CreateCustomerService from './CreateCustomerService';

let fakeCustomerRepository: FakeCustomerRepository;
let createCustomer: CreateCustomerService;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomerRepository = new FakeCustomerRepository();
    createCustomer = new CreateCustomerService(fakeCustomerRepository);
  });

  it('Should be able to create a new customer.', async () => {
    const customer = await createCustomer.execute({
      name: 'João sem Pão',
      email: 'joao@teste.com',
    });

    expect(customer).toHaveProperty('id');
  });

  it('Should be not able to create two customer with the same email.', async () => {
    await createCustomer.execute({
      name: 'João sem Pão',
      email: 'joao@teste.com',
    });

    expect(
      await createCustomer.execute({
        name: 'João sem Pão',
        email: 'joao@teste.com',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
