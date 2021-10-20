import { User } from '../entities/User';

export interface IUsersRepository {
    findByEmail(email: string): Promise<any>; // Promise<User> deveria ser mas nao consigo criar um User dentro do MongoUsersRepository
    findByPhone(phone: string): Promise<any>;
    save(user: User): Promise<void>
}
