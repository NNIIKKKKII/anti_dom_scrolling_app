import { getActivities } from "../services/activityService.js"

export const activityController = async (req, res) => {
    try {
        const { type, participants } = req.query;
        //Here either promise is resolved or rejected
        const data = await getActivities(type, participants);

        if (!data || data.length === 0) {
            return res.json([]);

        }
        const random = Math.floor(Math.random() * data.length)
        res.json(data[random])


        //controller's catch runs when promise is rejected and await takes it gives it to catch
    } catch (err) {
        //err.message is from activityService.js

        if (err.message === "RATE_LIMIT") {
            return res.status(429).json({
                message: "Too many requests, try again later"
            });
        }

        res.status(500).json({
            message: "Internal server error"
        });
    }
}   
