import { addNewNote } from "../actions/notes";
import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.notesAddNew:
            console.log( addNewNote )
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }
        case types.notesAddLoad:
            return {
                ...state,
                notes: [ ...action.payload ]
            }
        case types.notesAddUpdated:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                            ? action.payload.note
                            : note
                )
            }
        case types.notesDelete:
            return {
                ...state,
                active: null,
                notes: state.notes.filter(note => note.id !== action.payload )
            }
        case types.notesLogoutCleaning:
            return initialState;
        default:
            return state;
    }
}


