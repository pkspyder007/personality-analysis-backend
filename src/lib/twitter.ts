import { Client } from "twitter-api-sdk";
import config from "./config";

const client = new Client(config.get("TWITTER_BEARER_TOKEN") as string);

export async function getUser(username: string): Promise<any> {
    const data = await client.users.findUserByUsername(username);

    if (!data) throw new Error("Couldn't find user");

    return data;
}

export async function getUserTweets(userId: string): Promise<any> {
    const data = client.tweets.usersIdTweets(userId);

    if (!data) throw new Error("Couldn't find tweets");

    let count = 0;
    let res = [];

    for await (const page of data) {
        if(++count === 5) {
            break;
        }
        res.push(page.data)
    }

    return res.flat().map(t => t?.text);
}