import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    // action type
  name: "appSlice",
//   Initial State
  initialState: {
    isMenuOpen: true,
  },
//   Reducers
  reducers: {
    toggleMenu: (store) => {
        console.log(store);
      store.isMenuOpen = !store.isMenuOpen;
    },
    closeMenu:(store)=>{
      store.isMenuOpen=false;
    }
  },
});
export const {toggleMenu,closeMenu}= appSlice.actions;

export default appSlice.reducer; 
