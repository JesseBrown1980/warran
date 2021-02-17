import mongoose, { Connection} from "mongoose";

export abstract class BaseDatabase {
  public getConnection = async (): Promise<Connection> => {
    await mongoose.connect(`${process.env.DB_CLOUD}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = mongoose.connection;

    db.on("error", (error) => {
      console.log(error);
    });

    db.once("open", () => {
      console.log("Database connected");
    });

    return db;
  };
}
