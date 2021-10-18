import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class MongoUsersRepository implements IUsersRepository {
    async findByEmail(email: string): Promise<void> {
       
    }
    async save(user: User): Promise<void> {
        
    }
    async findByPhone(phone: string): Promise<void> {
    
    }
}