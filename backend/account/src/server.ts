import app from "./app";
import createDatabaseConnection from "./database";
import enviroment from "./configs/enviroment";

const { port, database_url } = enviroment;

createDatabaseConnection(database_url);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
