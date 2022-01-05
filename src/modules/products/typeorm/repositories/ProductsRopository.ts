import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Products';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  public async findByname(name: string): Promise<Product | undefined> {
    const product = await this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}
