import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudent } from "../Reduxtoolkit/students/studentauth";

const StudentCard = () => {
  const { student } = useSelector((state) => state.student);
  const dispatch = useDispatch();
  if (!student) {
    return (
      <div className="flex flex-col justify-center items-center h-60 space-y-4">
        {/* Avatar */}
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="No student avatar"
            className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-lg bg-gray-200 transition-transform transform hover:scale-105"
          />
        </div>

        {/* Message */}
        <p className="text-gray-300 text-lg md:text-xl font-semibold text-center">
          No Student Data Found
        </p>
      </div>
    );
  }

  const handleDelete = () => {
    if (student?.roll) {
      dispatch(deleteStudent(student.roll));
      alert("🗑 Student Deleted Successfully!");
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <div className="backdrop-blur-xl bg-white/20 border border-white/30 shadow-2xl rounded-3xl overflow-hidden w-full max-w-md md:w-md transition transform hover:scale-105 duration-300 hover:shadow-purple-500/50">
        {/* Header */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center py-4">
          <h1 className="text-2xl font-bold tracking-wide uppercase">
            {student.school || "Unknown School"}
          </h1>
          <span className="text-sm opacity-90">Student ID Card</span>
        </div>

        {/* Avatar */}
        <div className="flex justify-center mt-8">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.zUOT79xM4Y9q-29u61a1rwHaHa?pid=Api&P=0&h=180"
            alt="avatar"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md bg-gray-200"
          />
        </div>

        {/* Details */}
        <div className="px-6 sm:px-20 py-4 text-gray-100 space-y-2 text-lg">
          <p>
            <strong className="text-yellow-300">Name:</strong> {student.name}
          </p>
          <p>
            <strong className="text-yellow-300">Roll No:</strong> {student.roll}
          </p>
          <p>
            <strong className="text-yellow-300">Percentage:</strong>{" "}
            {student.per}%
          </p>
          <p>
            <strong className="text-yellow-300">School:</strong>{" "}
            {student.school}
          </p>
        </div>

        {/* Delete Button */}
        <div className="text-center pb-5">
          <button
            onClick={handleDelete}
            className="w-2/3 py-2 rounded-xl bg-red-500 text-white font-semibold shadow-md hover:bg-red-600 hover:shadow-xl transition-all duration-300"
          >
            🗑 Delete Student
          </button>
        </div>

        {/* Footer */}
        <div className="bg-white/10 text-center text-xs py-3 text-gray-200">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
