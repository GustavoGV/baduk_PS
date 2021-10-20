import { uuid } from 'uuidv4'; // biblioteca para criação de IDs unicos

export class Order { // um dos models para o TypeScript
    public readonly id: string; // torna imutavel o id de um usuario

    public customerId: string;

    public totalPrice: string;

    public products: Array<{ id: string, quantity: number }>;

    public createdAt: Date;

    public updatedAt: Date;

    constructor(props: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>) {
      this.customerId = props.customerId;
      this.totalPrice = props.totalPrice;
      this.products = props.products;
      this.createdAt = new Date();
      this.updatedAt = new Date();
      this.id = uuid();
    }
}
