import { UserDatabase, WalletDatabase } from '../data'
import { TransactionType, User, UserModel } from '../model'
import { MissingParameterError } from '../error';
import { InvalidParameterError } from '../error/invalid-parameter.error';
import { idIsValid } from '../utils'
import { NotFoundError } from '../error/resource-not-found';
import { badRequest, noContent, ok } from '../protocols';
import { InsuficientFundsError } from '../error/insuficient-funds-error';

export class WalletBusiness {
  walletDatabase: WalletDatabase;
  userDatabase: UserDatabase;
  constructor(walletDatabase: WalletDatabase, userDatabase: UserDatabase) {
    this.walletDatabase = walletDatabase;
    this.userDatabase = userDatabase;
  }


  async getStatement(user_id: string, skip: number, limit: 10, order_by: number) {

    if (!user_id) {
      return new MissingParameterError('user_id')
    }

    const validId = idIsValid(user_id)

    if (!validId) {
      return new InvalidParameterError('user_id')
    }

    const userExists = UserModel.findById({ id: user_id })

    if (!userExists) {
      return new NotFoundError()
    }

    const wallet = await this.walletDatabase.getStatement(user_id, skip, limit, order_by)
    return ok(wallet)
  }

  async handleTransaction(parameters: any) {

    const { amount, category, user_id } = parameters

    const requiredFields = ['amount', 'category', 'user_id']
    for (const field of requiredFields) {
      if (!parameters[field]) {
        return new MissingParameterError(field)
      }
    }

    if (amount < 0.01) {
      throw new InvalidParameterError('amount')
    }

    const validId = idIsValid(user_id)

    if (!validId) {
      return new InvalidParameterError('user_id')
    }

    const userExists: any = await this.userDatabase.getUserById(user_id)

    if (!userExists) {
      return new NotFoundError()
    }

    if ((category === TransactionType.PAYMENT || category === TransactionType.WITHDRAWL) && (userExists.balance < amount)) {
      throw new InsuficientFundsError()
    }

    const amountToTransaction = category === "withdrawl" || category === "payment" ? amount * -1 : amount

    const newBalance = userExists.balance + amountToTransaction

    await this.userDatabase.updateBalance(user_id, newBalance)
    await this.walletDatabase.saveTransaction(user_id, amount, category)

    return noContent()
  }

}