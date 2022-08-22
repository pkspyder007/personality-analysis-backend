import { Router } from "express";
import { getUser, getUserTweets } from "../lib/twitter";

const analysisRouter = Router();

analysisRouter.get('/analyse/:username', async (req, res) => {
    try {
        const { data } = await getUser(req.params.username);
        const t = await getUserTweets(data.id)
        res.send(t);
    } catch (error: any) {
        res.status(501).json({
            message: error.message
        });
    }
});

export default analysisRouter;