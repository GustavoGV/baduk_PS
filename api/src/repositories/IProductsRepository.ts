import { Product } from '../entities/Product';

export interface IProductsRepository {
    findByName(email: string): Promise<any>; // Promise<User> deveria ser mas nao consigo criar um User dentro do MongoUsersRepository
    findByPhone(phone: string): Promise<any>;
    save(user: Product): Promise<void>
}
