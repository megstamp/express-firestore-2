import { initializeApp, cert } from "firebase-admin/app"
import {getFirestore} from "firebase-admin/firestore"

//import credentials
import {credentials} from "../credentials.js"

//iniitalize the firesbase app by bringing in the credential as an object
initializeApp({
    credential:cert(credentials)
})

export const db = getFirestore()

