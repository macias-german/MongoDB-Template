import { connect } from "mongoose";
import { ObjectId } from "mongodb";
process.loadEnvFile();

const URI_DB = process.env.URI_DB || "mongodb://localhost:27017";

const connectMongoDb = async (URI: string) => {
  try {
    await connect(URI);
    console.log("Base de datos conectada exitosamente.");
  } catch (error) {
    console.log("Error al conectar con la base de datos.");
  }
};

connectMongoDb(URI_DB);

const argumentos = process.argv.splice(2);
const accion = argumentos[0];
