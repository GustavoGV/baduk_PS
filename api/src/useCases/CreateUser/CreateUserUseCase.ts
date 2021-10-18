import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
        private usersRepository: IUsersRepository,
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const mailAlreadyUsed = await this.usersRepository.findByEmail(data.email);
    const phoneAlreadyUsed = await this.usersRepository.findByPhone(data.phone);
    /*
        if(mailAlreadyUsed || phoneAlreadyUsed){
            throw new Error('User with this mail or phone arealdy exists')
        }
        */
    const user = new User(data);

    await this.usersRepository.save(user);
  }
}
