import { MongoProductsRepository } from '../../repositories/implementations/MongoProductsRepository';
import { ListProductController } from './ListProductController'
import { ListProductUseCase } from './ListProductUseCase';

const mongoProductsRepository = new MongoProductsRepository();

const listProductUseCase = new ListProductUseCase(
  mongoProductsRepository,
);

const listProductController = new ListProductController(
  listProductUseCase,
);

export { listProductUseCase, listProductController };
