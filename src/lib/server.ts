import express, { Express, IRouter } from 'express';

interface ServerInitOptions  {
    port: Number;
}

class Server {
    _app: Express;
    constructor() {
        this._app = express();
    }

    addMiddleware(middleware: MiddleWareFn): Server {
        this._app.use(middleware);
        return this;
    }

    addRouter(router: IRouter): Server {
        this._app.use(router);
        return this;
    }

    init({port}: ServerInitOptions) {
        this._app.listen(port, () => {
            console.log(`Server started on port : ${port}`);
        });
    }
}
export default Server;