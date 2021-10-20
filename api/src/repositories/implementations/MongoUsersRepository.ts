import { User } from '../../entities/User';
import { MUser } from '../../entities/iMongoUsers';
import { Model, model } from 'mongoose'
import { IUsersRepository } from '../IUsersRepository';

export class MongoUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<any> { //era para ser Promise<User> mas o model do Mongoose é de um tipo diferente... 
    let MailSearch = await MUser.findOne({email: email})
    return MailSearch
  }

  async save(user: User): Promise<void> {
    const mongoDoc = new MUser({
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
    });
    await mongoDoc.save();
  }

  async findByPhone(phone: string): Promise<any> {
    let PhoneSearch = await MUser.findOne({phone: phone})
    return PhoneSearch
  }
}
