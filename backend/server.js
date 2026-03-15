import express from "express"
import dotenv from "dotenv"
import activityRoutes from "./routes/activityRoutes.js"
import cors from "cors"
dotenv.config()

const app = express()
const port = process.env.PORT;









//middlewares
app.use(express.json());
app.use(cors());
app.use("/api", activityRoutes);






app.get("/", (req, res) => {
    res.send("Server is running...")
})





app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})