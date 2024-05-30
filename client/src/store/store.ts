import {configureStore} from '@reduxjs/toolkit'
import keepSlice from './slices/keepSlices'
export const store = configureStore({
    reducer: {
        keep: keepSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch