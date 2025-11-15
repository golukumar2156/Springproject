import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../Reduxtoolkit/students/studentsSlice";
const globelstrore= configureStore({
       reducer:{
           student: studentReducer,
       }
});
export default globelstrore;