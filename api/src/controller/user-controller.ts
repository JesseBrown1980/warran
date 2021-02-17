import { Request, Response } from "express";
import { UserBusiness, WalletBusiness } from "../business";
import { UserDatabase, WalletDatabase } from "../data";


export class UserController {
  async getUserById(req: Request, res: Response) {

    try {
      const id = req.params.id

      const userDatabase = new UserDatabase()
      const userBusiness = new UserBusiness(userDatabase)

      const user = await userBusiness.getUserById(id)
      res.send(user)
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async createUser(req: Request, res: Response) {
    try {

      const { email, name, password } = req.body

      const userDatabase = new UserDatabase()
      const userBussines = new UserBusiness(userDatabase)

      const parameters = { email, name, password }

      const newUser = await userBussines.createUser(parameters)
      res.status(200).send(newUser)
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

  async getUsers(req: Request, res: Response) {
    try {

      const userDatabase = new UserDatabase()
      const userBussines = new UserBusiness(userDatabase)

      const users = await userBussines.getUsers()
      res.send(users)
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }

}