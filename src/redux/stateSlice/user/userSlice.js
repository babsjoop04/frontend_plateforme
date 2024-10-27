import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    infos: {},
    token:null
  },
  reducers: {
    connection: (state, action) => {
        state.infos = action.payload.infos
        state.token = action.payload.token

      },
      deconnection: (state) => {
        state.infos = {}
        state.token = null

      },
    
  }
})

// Action creators are generated for each case reducer function
export const { connection, deconnection } = userSlice.actions

export default userSlice.reducer