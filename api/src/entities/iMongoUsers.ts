import { Schema, model, connect } from 'mongoose';
import { User } from './User';

const schema = new Schema<User>({ // criando um Schema (do MongoDB) com os mesmos valores da interface criada antes.
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  id: { type: String, required: false },
  createdAt: { type: Date, required: false },
  updatedAt: { type: Date, required: false },
});

const MUser = model<User>('User', schema); // Criado Model (compaivel com o Mongoose)

export { MUser };
