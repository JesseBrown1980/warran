import express from 'express'
import { UserController } from '../controller'

export const userRouter = express.Router()
const controller = new UserController()


userRouter.get('/all', controller.getUsers);
userRouter.get('/:id', controller.getUserById);
userRouter.post('/signup', controller.createUser);
