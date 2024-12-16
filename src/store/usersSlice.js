import { createSlice, nanoid } from "@reduxjs/toolkit";

//let arr = JSON.parse(localStorage.getItem("user")) ?? []; 
let arr = [];
try {
  arr = JSON.parse(localStorage.getItem("user")) ?? [];
} catch (error) {
  console.error("Error parsing localStorage item:", error);
  arr = [];
}

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: arr
  },
  reducers: {
    addUser(state, action) {
      const newUser = {
        id: nanoid(),
        tel: action.payload.tel,
        name: action.payload.name,
        surname: action.payload.surname,
      };
      state.users.push(newUser);
      localStorage.setItem("user", JSON.stringify(state.users));
    }
  }
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
