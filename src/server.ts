import "reflect-metadata";
import App from "./app";

const app = new App().server;

app.listen(7001, () => console.log(`Server is running`));