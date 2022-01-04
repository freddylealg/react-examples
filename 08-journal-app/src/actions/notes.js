import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, setDoc, doc, deleteDoc  } from 'firebase/firestore';
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from 'sweetalert2';
import { fileUpload } from "../helpers/fileUpload";

export const startNewNote = () => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote);
        dispatch( activeNote(doc.id, newNote) );
        dispatch( addNewNote(doc.id, newNote) );
    }
}


export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
})


export const addNewNote = (id, note) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});


export const startLoadingNotes = ( uid ) => {
    return async (dispatch) => {
        const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesAddLoad,
    payload: notes 
})


export const startSaveNote = (note) => {
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;

        if( !note.url ){
            delete note.url
        }

        const noteToFirebase = { ...note };
        delete noteToFirebase.id;

        await setDoc( doc(db, `${ uid }/journal/notes/${note.id}`), noteToFirebase );
        dispatch( refreshNote(note.id, noteToFirebase) );
        Swal.fire('Save', note.title, 'success');
    }
}


export const refreshNote = (id, note) => ({
    type: types.notesAddUpdated,
    payload: {
        id, 
        note: {
            id: id,
            ...note
        }
    }
})

export const startUploading = (file) => {
    return async ( dispatch, getState ) => {
        const activeNote = getState().notes.active;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        
        const fileUrl = await fileUpload( file );
        activeNote.url = fileUrl;
        dispatch( startSaveNote(activeNote) )

        Swal.close();
    }
}


export const startDeleting = ( id ) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid;
        const urlNote = `${ uid }/journal/notes/${id}`;
        console.log( urlNote );
        await deleteDoc( doc(db, urlNote) );
        dispatch( deleteNote(id) )
    }
}


export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


export const noteLogout = () => ({
    type: types.notesLogoutCleaning,
    payload: null
});