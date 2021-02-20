import { UserModel, UserInputDTO } from "../model";
import { BaseDatabase } from "./base-database";

export class UserDatabase extends BaseDatabase {

  createUser = async (name: string, password: string, email: string) => {
    try {
      await this.getConnection()
      await new UserModel({
        name, password, email
      }).save()
    } catch (error) {
      console.log(error)
      throw new Error(error.message)
    }
  }

  getUserByEmail = async (email: string) => {
    try {
      await this.getConnection()
      return await UserModel.findOne({ email }).exec()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  getUsers = async () => {
    try {
      await this.getConnection()
      return await UserModel.find({}).exec()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  getUserById = async (id: string) => {
    try {
      await this.getConnection()
      return await UserModel.findById(id, 'name email balance').exec()
    } catch (error) {
      throw new Error(error.message)
    }
  }

  updateBalance = async (id: string, newBalance: number) => {
    try {
      await this.getConnection()
      return await UserModel.findByIdAndUpdate(id, { balance: newBalance })
    } catch (error) {
      throw new Error(error.message)
    }
  }

}