import express from "express"
import connectdb from "./database.js"
import userRoutes from "./src/routes/userRoutes.js"
import eventRoutes from "./src/routes/eventRoutes.js"
import cors from "cors"

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
connectdb()

app.use("/user", userRoutes)
app.use("/event", eventRoutes)
app.listen(3001,()=>{console.log(`http://localhost:3001`)})
