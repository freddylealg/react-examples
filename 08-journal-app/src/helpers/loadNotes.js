import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"


export const loadNotes = async ( uid ) => {
    const notesCollection = collection(db, `${uid}/journal/notes`);
    const noteSnapshot = await getDocs( notesCollection );
    const noteList = noteSnapshot.docs.map( doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
     } );
    return noteList;
}