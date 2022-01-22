import { getCustomRepository } from 'typeorm';
import RedisCache from '@shared/cache/RedisCache';
import Product from '../infra/typeorm/entities/Products';
import { ProductsRepository } from '../infra/typeorm/repositories/ProductsRopository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const redisCache = new RedisCache();

    let products = await redisCache.recover<Product[]>(
      'api-vendas-PRODUCTS_LIST'
    );

    /** verificar se o redis tem produtos armazenados, se não salva
     * na base de dados e cria o cache no Redis
     */
    if (!products) {
      products = await productsRepository.find();

      await redisCache.save('api-vendas-PRODUCTS_LIST', products);
    }

    return products;
  }
}

export default ListProductService;
