import axios from "axios"
import cache from "../utils/cache.js"
import dotenv from "dotenv"
dotenv.config();

const API_URL = process.env.API_URL;



export const getActivities = async (type, participants) => {
    const cache_key = `${type}-${participants}`;


    // check if the data is in cache
    if (cache.has(cache_key)) {
        console.log("Data is in cache")
        let cache_data = cache.get(cache_key);
        console.log("Cache Data: ", cache_data)
        return cache_data

    }
    try {

        // else get it from external api
        const response = await axios.get(API_URL, {
            params: { type, participants }
        })

        console.log("Response from API: ", response)
        const data = response.data;
        console.log("Data from API: ", data)
        cache.set(cache_key, data, 600);
        console.log("Data set in cache")
        return data;
    } catch (err) {
        if (err.response?.status === 429) { //err.response.status is from axios specific
            throw new Error("RATE_LIMIT");
        }

        console.log("Error fetching activity", err);
        throw new Error("API_ERROR");
    }

}