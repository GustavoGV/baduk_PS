import { uuid } from 'uuidv4'; // biblioteca para criação de IDs unicos

export class User { // um dos models para o TypeScript
    public readonly id: string; // torna imutavel o id de um usuario

    public name: string;

    public email: string;

    public password: string;

    public phone: string;

    public createdAt: Date;

    public updatedAt: Date;

    constructor(props: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) { // "props: Omit<User, 'id' | 'createdAt' | 'updatedAt'>" -> props vai receber todas as propriedades da Classe User menos o ID, createdAt e updatedAt.
      this.name = props.name;
      this.email = props.email;
      this.password = props.password;
      this.phone = props.phone;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.id = uuid();
    }
}
