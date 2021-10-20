import { Order } from '../../entities/Order';
import { IOrdersRepository } from '../../repositories/IOrdersRepository';
import { ICreateOrderRequestDTO } from './CreateOrderDTO';

export class CreateOrderUseCase {
  constructor(
        private ordersRepository: IOrdersRepository,
  ) {}

  async execute(data: ICreateOrderRequestDTO) {
    //const mailAlreadyUsed = await this.ordersRepository.findByEmail(data.name);
    //const phoneAlreadyUsed = await this.ordersRepository.findByPhone(data.phone);
    /*
        if(mailAlreadyUsed || phoneAlreadyUsed){
            throw new Error('Usario com esse telefone ou email ja existe')
        }
    */
        //else{
          const user = new Order(data);
          await this.ordersRepository.save(user);
        //}
  }
}
