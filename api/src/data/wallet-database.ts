import { StatementModel, TransactionInputDTO, TransactionType } from "../model/statement";
import { BaseDatabase } from "./base-database";

export class WalletDatabase extends BaseDatabase {

  saveTransaction = async (user_id: string, amount: number, category: TransactionType) => {
    try {
      await this.getConnection()
      new StatementModel({
        user_id, amount, category
      }).save()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  getStatement = async (user_id: string, skip: number, limit: number, order_by: number) => {
    try {
      await this.getConnection()
      return await StatementModel.find({ user_id })
        .skip(skip)
        .limit(limit)
        .sort({
          created_at: order_by
        })
    } catch (error) {
      throw new Error(error.message)
    }
  }


}