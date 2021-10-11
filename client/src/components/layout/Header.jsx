import config from "@app/utils/config";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header className="px-8 flex flex-col">
      <h1 className="font-extrabold text-2xl text-center my-4">
        {config.siteName}
      </h1>
      <div className="flex gap-8 justify-center mb-2">
        {location.pathname !== "/login" && (
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full w-max"
          >
          Login
          </Link>
        )}

        {location.pathname !== "/create-account" && (
          <Link
            to="/create-account"
            className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-full w-max"
          >
          Create Account
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
