import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface KeepSliceTypes {
    id: number
}

const initialState = {
    id: 0,
} as KeepSliceTypes

export const keepSlice = createSlice({
    name: 'keep',
    initialState: initialState,
    reducers: {
        setId: (state, action:PayloadAction<string>)=>{
            state.id = Number(action.payload)
        }
    }
})

export const {setId} = keepSlice.actions
export default keepSlice.reducer