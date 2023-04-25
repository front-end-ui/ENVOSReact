import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      name: 'ENVOS',
      email: 'sk.ahzamali@gmail.com'
  },
  reducers: {
    
    changeName: state => {
      state.name = 'ENVOSDev'
    },
    
  }
})

export const { changeName } = userSlice.actions

export default userSlice.reducer