import { Schema, model, connect } from 'mongoose';
import { Product } from './Product'

const schema = new Schema<Product>({ // criando um Schema (do MongoDB) com os mesmos valores da interface criada antes.
  name: { type: String, required: true },
  price: { type: String, required: true },
  quantity: { type: String, required: true },
  id: { type: String, required: false },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false },
});

const MUser = model<Product>('User', schema); // Criado Model (compaivel com o Mongoose)

export { MUser };
