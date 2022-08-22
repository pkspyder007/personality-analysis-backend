import dotenv from "dotenv";

class Config {
    _config: Record<string, any>;
    constructor() {
        dotenv.config();
        this._config = {};

        Object.entries(process.env).forEach(([key, val]) => {
            if(key[0] === "P" && key[1] === "_") {
                this._config[key.replace("P_", "")] = val;
            }
        });

        console.log("Read .env file for config \n");
        console.log(this._config, "\n");
    }

    get(key: string): any {
        const val: any = this._config[key] ?? null;

        if(!val) {
            throw new Error(`Config for key [${key}] not found`);
        }

        return val;
    }

    set(key: string, val: any): void {
        this._config[key] = val;
    }
}

const config = new Config();

export default config;