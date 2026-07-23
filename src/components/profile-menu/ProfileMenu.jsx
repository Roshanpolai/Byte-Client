import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
import { logout } from "../../store/authSlice";

function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const initial = userData?.name?.charAt(0)?.toUpperCase() || "U";

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logoutHandler = () => {
    authService
      .logout()
      .then(() => {
        dispatch(logout());
        setOpen(false);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout runtime failure:", error);
      });
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-9 h-9 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-blue-500/30"
      >
        {initial}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-900 truncate">
              {userData?.name || "User"}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {userData?.email}
            </p>
          </div>

          <button
            onClick={() => {
              setOpen(false);
              navigate("/account");
            }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
          >
            Account
          </button>

          <button
            onClick={logoutHandler}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileMenu;