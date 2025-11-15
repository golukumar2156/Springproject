import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudent,
  deleteStudent,
  createStudent,
  updateStudent,
} from "../Reduxtoolkit/students/studentauth";
import { clearStudent } from "../Reduxtoolkit/students/studentsSlice";

const StudentManager = () => {
  const dispatch = useDispatch();
  const { student, loading, error } = useSelector((state) => state.student);

  const [form, setForm] = useState({ name: "", per: "", school: "" });
  const [roll, setRoll] = useState("");

  // Populate form with fetched student data
  useEffect(() => {
    if (student) {
      setForm({ name: student.name, per: student.per, school: student.school });
    }
  }, [student]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createStudent(form));
    alert(" Student Added Successfully!");
    setForm({ name: "", per: "", school: "" });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (roll) dispatch(fetchStudent(roll));
  };

  const handleClear = () => {
    dispatch(clearStudent());
    setRoll("");
    setForm({ name: "", per: "", school: "" });
  };

  const handleUpdate = () => {
    if (student?.roll) {
      dispatch(updateStudent({ id: student.roll, student: form }));
      alert("Student Updated Successfully!");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 space-y-6 w-full">
      {/* Search Student (TOP) */}
      <form
        className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
        onSubmit={handleSearch}
      >
        <input
          type="number"
          placeholder="Enter Roll No"
          className="flex-1 p-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-gray-200 focus:ring focus:ring-blue-300 outline-none transition"
          value={roll}
          onChange={(e) => setRoll(e.target.value)}
          required
        />
        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-gray-900 font-bold px-4 py-2 rounded-xl shadow hover:scale-[1.02] transition"
          >
            🔍 Search
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition"
          >
             Clear
          </button>
          {student && (
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-xl shadow hover:bg-yellow-500 transition"
            >
               Update
            </button>
          )}
        </div>
      </form>

      {/* Loading / Error */}
      {loading && (
        <p className="text-white font-semibold text-lg animate-pulse">
           Loading...
        </p>
      )}

      {error && (
        <div className="w-full max-w-md bg-red-500/80 border border-red-600 rounded-xl p-4 flex items-center gap-3 shadow-lg animate-pulse">
          <span className="text-white font-bold text-xl">⚠️</span>
          <p className="text-white font-semibold">
            {typeof error === "string"
              ? error
              : error?.message || "Student not found!"}
          </p>
        </div>
      )}

      {/* Add Student Form */}
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-2xl w-full max-w-md p-4 sm:p-6 transition hover:scale-[1.02] duration-300"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-4 sm:mb-6 tracking-wide">
          🎓 Add Student
        </h2>
        <input
          className="bg-white/70 border border-white/40 p-3 w-full mb-3 rounded-xl focus:ring focus:ring-[#9ADCFF] outline-none placeholder-gray-600 text-gray-900"
          type="text"
          name="name"
          placeholder="Student Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="bg-white/70 border border-white/40 p-3 w-full mb-3 rounded-xl focus:ring focus:ring-[#9ADCFF] outline-none placeholder-gray-600 text-gray-900"
          type="number"
          name="per"
          placeholder="Percentage"
          value={form.per}
          onChange={handleChange}
          required
        />
        <input
          className="bg-white/70 border border-white/40 p-3 w-full mb-4 rounded-xl focus:ring focus:ring-[#9ADCFF] outline-none placeholder-gray-600 text-gray-900"
          type="text"
          name="school"
          placeholder="School Name"
          value={form.school}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-gray-900 font-bold rounded-xl shadow hover:opacity-90 hover:scale-[1.02] transition-all"
        >
          💾 Save Student
        </button>
      </form>
    </div>
  );
};

export default StudentManager;
