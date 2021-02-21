import { UserDatabase } from "../data/user-database";
import { MissingParameterError } from "../error";
import { InvalidParameterError } from "../error/invalid-parameter.error";
import { UserInputDTO, UserModel } from "../model";
import { created, noContent, ok } from "../protocols";
import { emailIsValid, idIsValid } from '../utils'

export class UserBusiness {
  userDatabase: UserDatabase;
  constructor(userDatabase: UserDatabase) {
    this.userDatabase = userDatabase;
  }

  async createUser(user: UserInputDTO) {

    const { email, password, name } = user

    const validEmail: boolean = emailIsValid(email)

    if (!validEmail) {
      throw new InvalidParameterError("email")
    }

    const newUser = await this.userDatabase.createUser(name, password, email)
    return created(newUser)
  }

  async getUsers() {

    const users = await this.userDatabase.getUsers()
    return ok(users)
  }

  async getUserById(id: string) {

    const validId = idIsValid(id)

    if (!validId) {
      throw new InvalidParameterError('id')
    }

    const user = await this.userDatabase.getUserById(id)
    return ok(user)
  }

}