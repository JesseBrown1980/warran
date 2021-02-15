import mongoose, { Schema } from 'mongoose';

export enum TransactionType {
  PAYMENT = 'payment',
  DEPOSIT = 'deposit',
  WITHDRAWL = 'withdrawl',
}

export const StatementSchema = new Schema({
  amount: {
    type: Number,
    required: 'Transaction amount missing',
    min: 0.01,
  },
  category: {
    type: TransactionType,
    lowercase: true,
    required: 'Transaction type missing',
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now()
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }  
});


export const stringToTransactionType = (input: string) => {
  switch (input) {
    case 'payment':
      return TransactionType.PAYMENT;
    case 'deposit':
      return TransactionType.DEPOSIT;
    case 'withdrawl':
      return TransactionType.WITHDRAWL;
    default:
      throw new Error('Invalid transaction type');
  }
};

export interface TransactionInputDTO {
  amount: number;
  category: TransactionType;
}

export const StatementModel = mongoose.model('statements', StatementSchema);
