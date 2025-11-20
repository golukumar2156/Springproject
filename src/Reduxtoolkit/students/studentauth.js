import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/globalAPi";

// CREATE STUDENT
export const createStudent = createAsyncThunk(
  "student/create",
  async (student, { rejectWithValue }) => {
    try {
      const res = await api.post("student/saved", student);
      console.log("API Response:", res);
      return res.data;

    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

// UPDATE STUDENT
export const updateStudent = createAsyncThunk(
  "student/update",
  async ({ id, student }, { rejectWithValue }) => {
    try {
      const res = await api.put(`student/update/${id}`, student);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

// DELETE STUDENT
export const deleteStudent = createAsyncThunk(
  "student/delete",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.delete(`student/delete/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

// GET STUDENT
export const fetchStudent = createAsyncThunk(
  "student/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`student/${id}`); // FIXED ENDPOINT
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

//  get search by school
export const fetchStudentsBySchool = createAsyncThunk(
  "student/fetchSchool" , async(schoolid,{rejectWithValue})=>{
    try{
      const res=await api.get(`student/school/${schoolid}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
)
