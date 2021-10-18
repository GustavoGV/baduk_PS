import { Schema, model, connect } from 'mongoose';
import { User } from '../entities/User';

const schema = new Schema<User>({ // criando um Schema (do MongoDB) com os mesmos valores da interface criada antes.
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  id: { type: String, required: false },
});

const MUser = model<User>('User', schema); // Criado Model (compaivel com o Mongoose)

export { MUser };
