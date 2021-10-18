import { User } from '../entities/User';

export interface IUsersRepository {
    findByEmail(email: string): Promise<void>; // Promise<User> deveria ser mas nao consigo criar um User dentro do MongoUsersRepository
    findByPhone(phone: string): Promise<void>;
    save(user: User): Promise<void>
}
