import { Request, Response } from 'express';
import { ListOrderUseCase } from './ListOrderUseCase';

export class ListOrderController {
  constructor(
        private listOrdersUseCase: ListOrderUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { acimaDe, abaixoDe, inicioPeriodo, finalPeriodo, page, contentsPerPage, ids } = request.body;
    try {
      await this.listOrdersUseCase.execute({
        acimaDe,
        abaixoDe,
        inicioPeriodo,
        finalPeriodo,
        page,
        contentsPerPage,
        ids
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
