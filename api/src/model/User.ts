import mongoose, { Schema, Document } from 'mongoose';
import { Encrypter } from '../service/Encrypter';


export const UserSchema: Schema = new Schema({
  email : {
    type: String,
    unique: true,
    required: 'Username required',
    lowercase: true,
  },
  name: {
    type: String,
    required: 'Username required',
    lowercase: true,
  },
  password: {
    type: String,
    required: 'Password required',
  },
  balance: {
    type: Number,
    lowercase: true,
    default: 0,
    required: 'Balance required',
  },
});

export interface UserInputDTO {
  password: string;
  email: string;
  name: string;
  balance?: number;
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

UserSchema.pre<UserInputDTO & Document>('save', async function (next) {
  const encrypter = new Encrypter();
  const hashPassword = await encrypter.hash(this.password);
  this.password = hashPassword;
  next();
});

export const UserModel = mongoose.model('users', UserSchema);
