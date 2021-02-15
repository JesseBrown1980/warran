import { UserDatabase } from "../data/user-database";
import { MissingParameterError } from "../error";
import { InvalidParameterError } from "../error/invalid-parameter.error";
import { emailIsValid } from '../utils'

export class UserBusiness {
  userDatabase: UserDatabase;
  constructor(userDatabase: UserDatabase) {
    this.userDatabase = userDatabase;
   }

  async createUser(user: any) {
    try {

      const requiredFields = ['email', 'password', 'name']
      for (const field of requiredFields) {
        if (!user[field]) {
          return new MissingParameterError(field)
        }
      }

      const { email } = user

      const validEmail: boolean = emailIsValid(email)

      if (!validEmail) {
        return new InvalidParameterError("email")
      }

      await this.userDatabase.createUser(user)
    } catch (error) {
      throw new Error(error.message)
    }
  }

}