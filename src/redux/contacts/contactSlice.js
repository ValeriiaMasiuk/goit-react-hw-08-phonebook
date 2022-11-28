import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contacts', initialState: [],
    reducers: {
        addsContact(state, action) {
            return [...state, action.payload]
        },
        removeContact(state, action) {
            return state.filter(item => item.id !== action.payload)
        }
    }
})

export const { addsContact, removeContact } = contactSlice.actions;
