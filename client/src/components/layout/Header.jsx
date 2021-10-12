import UserContext from "@app/context/UserContext";
import UserService from "@app/services/User";
import config from "@app/utils/config";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [user, setUser] = useContext(UserContext);

  const location = useLocation();

  const handleClick = () => {
    UserService.logout();
    setUser(null);
  };

  return (
    <header className="px-8 flex flex-col">
      <h1 className="font-extrabold text-2xl text-center my-4">
        <Link to="/">{config.siteName}</Link>
      </h1>
      <div className="flex flex-col gap-4 items-center mb-2">
        {user ? (
          <>
            <button onClick={handleClick}>Logout</button>
            <p>Welcome {user.firstName}. Now, go spend some money! 💰</p>
          </>
        ) : (
          <p>Login or Create Account to shop 🛍️!</p>
        )}

        <div className="flex gap-8">
          {!user && location.pathname !== "/login" && (
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full w-max"
            >
              Login
            </Link>
          )}

          {!user && location.pathname !== "/add-user" && (
            <Link
              to="/add-user"
              className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-full w-max"
            >
              Create Account
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
