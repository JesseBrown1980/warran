import { UserModel, UserInputDTO } from "../model";
import { BaseDatabase } from "./base-database";

export class UserDatabase extends BaseDatabase {

  createUser = async (user: UserInputDTO) => {
    try {
      await this.getConnection()
      new UserModel({
        user
      }).save()
    } catch (error) {
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

}