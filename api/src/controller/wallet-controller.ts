import { Request, Response } from "express";
import { WalletBusiness } from "../business";
import { UserDatabase, WalletDatabase } from "../data";
import { InvalidParameterError } from "../error";
import { InsuficientFundsError } from "../error/insuficient-funds-error";
import { TransactionType } from "../model";


export class WalletController {
  async getStatement(req: Request, res: Response) {

    try {
      const user_id = req.params.user_id

      const skip = Number(req.query.skip)
      const limit = Number(req.query.limit)
      const order_by = Number(req.query.order_by)

      const walletDatabase = new WalletDatabase()
      const userDatabase = new UserDatabase()
      const walletBusiness = new WalletBusiness(walletDatabase, userDatabase)

      const statement = await walletBusiness.getStatement(user_id, skip, limit, order_by)
      res.status(200).send(statement)
    } catch (error) {
      res.status(400).send(error);
    }
  }

  async handleTransaction(req: Request, res: Response) {
    try {

      const { amount, category, user_id } = req.body

      const categories = [TransactionType.PAYMENT, TransactionType.WITHDRAWL, TransactionType.DEPOSIT]

      if (categories.indexOf(category) === -1) {
        res.status(400).send(new InvalidParameterError('category'));
      }

      const walletDatabase = new WalletDatabase()
      const userDatabase = new UserDatabase()
      const walletBusiness = new WalletBusiness(walletDatabase, userDatabase)

      const parameters = { amount, category, user_id }

      const transaction = await walletBusiness.handleTransaction(parameters)

      res.status(204).send(transaction)
    } catch (error) {
      res.status(error.errorCode || 400).send({ message: error.message });
    }
  }
}