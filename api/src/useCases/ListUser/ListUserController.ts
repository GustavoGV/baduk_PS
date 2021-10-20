import { Request, Response } from 'express';
import { ListUserUseCase } from './ListUserUseCase';

export class ListUserController {
  constructor(
        private listUsersUseCase: ListUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, phone } = request.body;
    try {
      await this.listUsersUseCase.execute({
        name,
        email,
        password,
        phone,
      });
      return response.status(201).send();
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: 'Unexpected error on User creation',
      });
    }
  }
}
