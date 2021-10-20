import { Schema, model, connect } from 'mongoose';
import { Order } from './Order'

const schema = new Schema<Order>({ // criando um Schema (do MongoDB) com os mesmos valores da interface criada antes.
  customerId: { type: String, required: true },
  totalPrice: { type: String, required: true },
  products: { type: [], required: true },
  id: { type: String, required: false },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false },
});

const MUser = model<Order>('User', schema); // Criado Model (compaivel com o Mongoose)

export { MUser };
