import { uuid } from 'uuidv4'; // biblioteca para criação de IDs unicos

export class Product { // um dos models para o TypeScript
    public readonly id: string; // torna imutavel o id de um usuario

    public name: string;

    public price: string;

    public quantity: string;

    public createdAt: Date;

    public updatedAt: Date;

    constructor(props: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) {
      this.name = props.name;
      this.price = props.price;
      this.quantity = props.quantity;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.id = uuid();
    }
}
