import { User } from '../../entities/User';
import { MUser } from '../../entities/iMongoUsers';
import { Model, model } from 'mongoose'
import { IProductsRepository } from '../IProductsRepository';
import { Product } from '../../entities/Product';

export class MongoProductsRepository implements IProductsRepository {
  async findByName(email: string): Promise<any> { //era para ser Promise<User> mas o model do Mongoose é de um tipo diferente... 
    let MailSearch = await MUser.findOne({email: email})
    return MailSearch
  }

  async save(produto: Product): Promise<void> {
    const mongoDoc = new MUser({
      name: produto.name,
      price: produto.price,
      quantity: produto.quantity,
    });
    await mongoDoc.save();
  }

  async findByPhone(phone: string): Promise<any> {
    let PhoneSearch = await MUser.findOne({phone: phone})
    return PhoneSearch
  }
}
