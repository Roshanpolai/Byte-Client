// import React from "react";
// import { useDispatch } from "react-redux";
// import authService from "../../services/auth.service";
// import { logout } from "../../store/authSlice";

// function LogoutBtn() {
//   const dispatch = useDispatch();

//   const logoutHandler = () => {
//     authService
//       .logout()
//       .then(() => {
//         dispatch(logout());
//       })
//       .catch((error) => {
//         console.error("Logout runtime failure:", error);
//       });
//   };

//   return (
//     <button
//       onClick={logoutHandler}
//       className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 active:scale-95"
//     >
//       <svg
//         className="w-4 h-4 mr-1.5"
//         fill="none"
//         stroke="currentColor"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
//         />
//       </svg>
//       Logout
//     </button>
//   );
// }

// export default LogoutBtn;
