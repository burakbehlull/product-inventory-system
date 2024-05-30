import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { KeepSliceTypes } from '../../types/storeTypes'
const initialState = {
    id: 0,
} as KeepSliceTypes

export const keepSlice = createSlice({
    name: 'keep',
    initialState: initialState,
    reducers: {
        setId: (state, action:PayloadAction<string|number>)=>{
            state.id = Number(action.payload)
        }
    }
})

export const {setId} = keepSlice.actions
export default keepSlice.reducer