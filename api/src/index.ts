import { AddressInfo } from "net";
import express from "express";
import { router } from "./router";
import cors from "cors"

const app = express();
app.use(cors({ origin: true }));

app.use(express.json());

app.use("/api", router);

export const server = app.listen(process.env.PORT || 9000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server running: http://localhost:${address.port}`);
  } else {
    console.error(`Server running failed`);
  }
});
