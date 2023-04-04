import express from "express"
import cors from "cors"

//import CRUD functions
import { addNewTv, getAllTv} from "./src/tvLibrary.js"

const PORT = 3003

const app = express ()
app.use ( cors() )
app.use ( express.json () )

//get all tv shows
app.get("/tvShows", getAllTv);

//add tvSHows
app.post("/tvShows, addNewTv");

app.listen (PORT, () => {
    console.log(`listening on http:localhost:${PORT}`)
});

