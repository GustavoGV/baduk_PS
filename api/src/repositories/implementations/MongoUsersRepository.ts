import { Schema, model, connect } from 'mongoose';
import { User } from '../../entities/User';
import { MUser } from '../iMongo';
import { IUsersRepository } from '../IUsersRepository';

export class MongoUsersRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<void> {

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

  async findByPhone(phone: string): Promise<void> {

  }
}
