import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors(
    {
        origin: [
            "http://localhost:5173/",
            "http://localhost:5173/"
        ],
        credentials: true,
        methods: ["GET","POST","PUT","DELETE"],
        allowedHeaders: ["Content-Type","Authorization"]
    }
))

// API route
app.get('/api/message', (req,res) => {
    res.json({message : "Hello from Backend of Full Stack Website"})
});

const PORT = 4000;

app.listen(PORT, () => {console.log(`Server is running at http://localhost:${PORT}`)})