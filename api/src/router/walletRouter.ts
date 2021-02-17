import express from 'express'
import { WalletController } from '../controller'

export const walletRouter = express.Router()
const controller = new WalletController()


walletRouter.get('/:user_id', controller.getStatement);
walletRouter.post('/', controller.handleTransaction);
