import express from "express"
import dotenv from "dotenv"
import connectDB from "./src/config/db.js"
import productRoutes from "./src/routes/productRoutes.js"
import errorHandler from "./src/middlewares/errorHAndler.js"
import cors from 'cors'

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use(cors({
    origin:"https://integration-frontend-qdeo.onrender.com"
}))

app.get("/", (req, res) => {
    res.status(200).json("Server is running")
})

app.use("/products", productRoutes)
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})