import Server from "./lib/server";
import config from "./lib/config";
import cors from "cors";
import helmet from "helmet";
import routers from "./routes";

/* Create new server instance */
const app = new Server();

/* Add middlewares */
app
    .addMiddleware(cors())
    .addMiddleware(helmet())

/* Add Router */
Object.values(routers).forEach(router => {
    app
        .addRouter(router);
});

/* Start server to listen to requests */

if(process.env.PORT) {
    config.set("PORT", process.env.PORT);
}

app.init({
    port: config.get("PORT")
});