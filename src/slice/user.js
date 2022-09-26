import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: JSON.parse(localStorage.getItem('user')) || null,
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
            localStorage.setItem('user', JSON.stringify(state.value))
        }
    }
})

export const { setUser } = userSlice.actions
export default userSlice.reducer