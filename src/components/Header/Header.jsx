// import React from "react";
// import { Container, Logo, LogoutBtn } from "../index.js";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Header() {
//   const authStatus = useSelector((state) => state.auth.status);
//   const navigate = useNavigate();
//   const location = useLocation(); // Hook to check which tab is currently active

//   const navItems = [
//     {
//       name: "Home",
//       slug: "/",
//       active: true,
//     },
//     {
//       name: "Login",
//       slug: "/login",
//       active: !authStatus,
//     },
//     {
//       name: "Signup",
//       slug: "/signup",
//       active: !authStatus,
//     },
//     {
//       name: "All Posts",
//       slug: "/all-posts",
//       active: authStatus,
//     },
//     {
//       name: "Add Post",
//       slug: "/add-post",
//       active: authStatus,
//     },
//   ];

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
//       <Container>
//         <nav className="flex items-center justify-between h-16 px-4 sm:px-0">
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
//               <Logo width="150px" />
//             </Link>
//           </div>

//           {/* Navigation Area */}
//           <div className="flex items-center gap-6">
//             <ul className="flex items-center gap-1 sm:gap-2">
//               {navItems.map((item) => {
//                 if (!item.active) return null;
//                 const isActiveTab = location.pathname === item.slug;

//                 return (
//                   <li key={item.name}>
//                     <button
//                       onClick={() => navigate(item.slug)}
//                       className={`relative inline-block px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg
//                         ${isActiveTab
//                           ? "text-blue-600 bg-blue-50 font-semibold"
//                           : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
//                         }`}
//                     >
//                       {item.name}
//                     </button>
//                   </li>
//                 );
//               })}
//             </ul>

//             {/* Logout-Btn */}
//             {authStatus && (<div className="pl-4 border-l border-gray-200"><LogoutBtn /></div>)}

//           </div>
//         </nav>
//       </Container>
//     </header>
//   );
// }

// export default Header;


import React, { useState } from "react";
import { Container, Logo, ProfileMenu } from "../index.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/all-posts?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const isActive = (slug) => location.pathname === slug;

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <Container>
        <nav className="flex items-center justify-between h-16 px-4 sm:px-0 gap-6">
          {/* Left: Logo + Search */}
          <div className="flex items-center gap-6 flex-1 min-w-0">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity shrink-0"
            >
              <Logo width="150px" />
            </Link>

            {authStatus && (
              <form
                onSubmit={handleSearchSubmit}
                className="hidden sm:flex items-center flex-1 max-w-sm"
              >
                <div className="relative w-full">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search posts..."
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-100 rounded-full outline-none focus:bg-gray-50 focus:ring-2 focus:ring-blue-500/20 transition"
                  />
                </div>
              </form>
            )}
          </div>

          {/* Right: Nav actions */}
          <div className="flex items-center gap-4 shrink-0">
            {authStatus ? (
              <>
                <button
                  onClick={() => navigate("/")}
                  className={`hidden sm:inline-block px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive("/")
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => navigate("/all-posts")}
                  className={`hidden sm:inline-block px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive("/all-posts")
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  All Posts
                </button>

                <button
                  onClick={() => navigate("/add-post")}
                  className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Write</span>
                </button>

                <div className="pl-4 border-l border-gray-200">
                  <ProfileMenu />
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate("/login")}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive("/login")
                      ? "text-blue-600 bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:opacity-90 transition"
                >
                  Signup
                </button>
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;