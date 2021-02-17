import { AddressInfo } from "net";
import dotenv from 'dotenv';
import express from "express";
import cors from "cors"
import { userRouter } from './router/userRouter'
import { walletRouter } from './router/walletRouter'

dotenv.config();
const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.use("/user", userRouter);
app.use("/wallet", walletRouter);

export const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running: http://localhost:${address.port}`);
  } else {
    console.error(`Server running failed`);
  }
});
