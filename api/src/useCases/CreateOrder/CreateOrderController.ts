import { Request, Response } from 'express';
import { CreateOrderUseCase } from './CreateOrderUseCase';

export class CreateOrderController {
  constructor(
        private createOrdersUseCase: CreateOrderUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { customerId, totalPrice, products } = request.body;
    try {
      await this.createOrdersUseCase.execute({
        customerId,
        totalPrice,
        products,
      });
      return response.status(201).send();
    } catch (err) {
      console.log(err);
      return response.status(400).json({
        message: 'Unexpected error on Order creation',
      });
    }
  }
}
