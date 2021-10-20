import { MongoOrdersRepository } from '../../repositories/implementations/MongoOrdersRepository';
import { CreateOrderController } from './CreateOrderController';
import { CreateOrderUseCase } from './CreateOrderUseCase';

const mongoOrdersRepository = new MongoOrdersRepository();

const createOrderUseCase = new CreateOrderUseCase(
  mongoOrdersRepository,
);

const createOrderController = new CreateOrderController(
  createOrderUseCase,
);

export { createOrderUseCase, createOrderController };
