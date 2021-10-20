import { MongoOrdersRepository } from '../../repositories/implementations/MongoOrdersRepository';
import { ListOrderController } from './ListOrderController';
import { ListOrderUseCase } from './ListOrderUseCase';

const mongoOrdersRepository = new MongoOrdersRepository();

const listOrderUseCase = new ListOrderUseCase(
  mongoOrdersRepository,
);

const listOrderController = new ListOrderController(
  listOrderUseCase,
);

export { listOrderUseCase, listOrderController };
