import { Request, Response } from 'express';
import { CreateProductUseCase } from './CreateProductUseCase';

export class CreateProductController {
  constructor(
        private createProductUseCase: CreateProductUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, quantity } = request.body;
    try {
      await this.createProductUseCase.execute({
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
