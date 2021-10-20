import { Request, Response } from 'express';
import { ListProductUseCase } from './ListProductUseCase';

export class ListProductController {
  constructor(
        private listProductUseCase: ListProductUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    try {
      await this.listProductUseCase.execute({
        name,
        price,
        quantity,
      });
      return response.status(201).send();
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: 'Unexpected error on Product creation',
      });
    }
  }
}
