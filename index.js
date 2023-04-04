import express from "express"
import cors from "cors"

const PORT = 3003

const app = express ()
app.use ( cors() )
app.use ( express.json () )

app.listen (PORT, () => {
    console.log(`listening on http:localhost:${PORT}`)
})
