import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'slice',
    initialState: {
        lang: 'ru',
    },
    reducers: {
        setLang: (state) => {
            state.lang === 'ru' ? state.lang = 'en' : state.lang = 'ru';
        }
    }
});

export const { setLang } = slice.actions;

export default slice.reducer;