import { useState } from "react";
import { getUser, logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const user = getUser(); // from localStorage
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  if (!user) return null; // no navbar if no user

  return (
    <div className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/products")}>
        MyApp
      </h1>

      <div className="relative">
        {/* Profile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src={user.image || "https://i.pravatar.cc/40"}
            alt="avatar"
            className="w-10 h-10 rounded-full border"
          />
          <span className="hidden sm:block font-medium">{user.firstName}</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
            <button
              onClick={() => {
                setOpen(false);
                navigate("/profile");
              }}
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              View Profile
            </button>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
