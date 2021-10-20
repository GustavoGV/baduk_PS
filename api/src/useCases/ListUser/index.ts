import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository';
import { ListUserController } from './ListUserController';
import { ListUserUseCase } from './ListUserUseCase';

const mongoUsersRepository = new MongoUsersRepository();

const listUserUseCase = new ListUserUseCase(
  mongoUsersRepository,
);

const listUserController = new ListUserController(
  listUserUseCase,
);

export { listUserUseCase, listUserController };
