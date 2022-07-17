import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
  "usersListContainer/getUsers",
  // async (_, thunkAPI) => {
  //   try {
  //     const res = await fetch(
  //       "https://hedashboard-37c46-default-rtdb.firebaseio.com/users.json"
  //     );
  //     const data = await res.json();
  //     return data;
  //   } catch (error) {
  //     return thunkAPI.rejectWithValue(error.message);
  //   }
  // }
);


export const insertUser = createAsyncThunk(
  "usersListContainer/insertUser",
  async (dataUser, thunkAPI) => {
    try {
      const res = await fetch(
        "https://hedashboard-37c46-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(dataUser),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersList = createSlice({
  name: "usersListContainer",
  initialState: { usersListState: [], isLoading: false, error: null },
  extraReducers: {


    [getUsers.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.usersListState = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },






    [insertUser.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    },
    [insertUser.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
  },
});

export default usersList.reducer;
