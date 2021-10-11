import config from "@app/utils/config";
import React from "react";

function Header() {
  return (
    <header className="px-8 flex flex-col">
      <h1 className="font-extrabold text-2xl text-center my-4">
        {config.siteName}
      </h1>
      <div className="flex justify-between mb-2">
        <button className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-full w-max">
          Login
        </button>

        <button className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-full w-max">
          Create Account
        </button>
      </div>
    </header>
  );
}

export default Header;
