import { createSlice } from "@reduxjs/toolkit";
import { createStudent, updateStudent, deleteStudent, fetchStudent } from "./studentauth";

const studentSlice = createSlice({
  name: "student",
  initialState: {
    student: null,
    loading: false,
    error: null,
    message: null,
  },

  reducers: {
    clearMessage(state) {
      state.message = null;
    },
    clearStudent(state) {   // ✅ Added clearStudent
      state.student = null;
      state.error = null;
      state.message = null;
    },
  },

  extraReducers: (builder) => {
    builder
      //  Fetch Student
      .addCase(fetchStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = action.payload;
      })
      .addCase(fetchStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //  Create Student
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = action.payload;
        state.message = "Student Created Successfully 🎉";
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //  Update Student
      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = action.payload;
        state.message = "Student Updated Successfully ✔";
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //  Delete Student
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.student = null;
        state.message = "Student Deleted Successfully ❌";
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMessage, clearStudent } = studentSlice.actions; // ✅ export
export default studentSlice.reducer;
