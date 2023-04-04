import { db } from "./dbConnect.js";

export function addNewTv(req, res) {
  const newTv = req.body;
  //CREATE: add new tv show
  db.collection("tvShows")
    .add(newTv)
    .then((doc) => res.status(201).send(`New Tv Added: ${doc.id}`))
    .catch((err) => res.status(500).send(err))
}

export async function getAllTv(req, res) {
  const collection = await db
    .collection("tvShows")
    .get()
    .catch((err) => res.status(500).send(err));

const tvShowsList = collection.docs.map(
    tvShow => ( {...tvShows.data(), id: tvShow.id} )
    )
}