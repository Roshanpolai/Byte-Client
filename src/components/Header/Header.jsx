import React from "react";
import { Container, Logo, LogoutBtn } from "../index.js";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation(); // Hook to check which tab is currently active

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all">
      <Container>
        <nav className="flex items-center justify-between h-16 px-4 sm:px-0">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              <Logo width="80px" />
            </Link>
          </div>

          {/* Navigation Action Area */}
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                if (!item.active) return null;
                const isActiveTab = location.pathname === item.slug;

                return (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                      className={`relative inline-block px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg
                        ${
                          isActiveTab
                            ? "text-blue-600 bg-blue-50 font-semibold"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Logout Trigger Segment */}
            {authStatus && (
              <div className="pl-4 border-l border-gray-200">
                <LogoutBtn />
              </div>
            )}
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
