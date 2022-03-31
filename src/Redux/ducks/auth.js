import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
  },
  reducers: {
    
  },
});

//exporter toutes les actions pour les composants
export const { loadUserFromAPI, loadUserFromLocalStorage, clearUserSession } =
  authSlice.actions;
//exporter le reduceur pour le store
export default authSlice.reducer;
