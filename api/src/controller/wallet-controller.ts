import { Request, Response } from "express";
import { WalletBusiness } from "../business";
import { UserDatabase, WalletDatabase } from "../data";


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
      res.send(statement)
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async handleTransaction(req: Request, res: Response) {
    try {

      const { amount, category, user_id } = req.body

      const walletDatabase = new WalletDatabase()
      const userDatabase = new UserDatabase()
      const walletBusiness = new WalletBusiness(walletDatabase, userDatabase)

      const parameters = { amount, category, user_id }

      const transaction = await walletBusiness.handleTransaction(parameters)

      if (!transaction) {
        res.status(400).send({ error: 'Insuficient Funds' });
      }
      res.send(transaction)
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
}