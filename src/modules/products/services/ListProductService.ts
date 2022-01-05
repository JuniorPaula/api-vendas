import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Products';
import { ProductsRepository } from '../typeorm/repositories/ProductsRopository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const products = await productsRepository.find();

    return products;
  }
}

export default ListProductService;
