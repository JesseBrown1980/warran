import mongoose from 'mongoose';

export function idIsValid(id: string) {
  return mongoose.Types.ObjectId.isValid(id)
}
