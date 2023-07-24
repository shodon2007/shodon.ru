import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'slice',
    initialState: {
        lang: 'ru',
        activePage: 0,
    },
    reducers: {
        setLang: (state) => {
            state.lang === 'ru' ? state.lang = 'en' : state.lang = 'ru';
        },
        changePage: (state, action) => {
            state.activePage = action.payload;
        }
    }
});

export const { setLang, changePage } = slice.actions;

export default slice.reducer;