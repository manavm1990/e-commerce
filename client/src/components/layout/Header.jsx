import React from "react";
import config from "@app/utils/config";

function Header() {
  return (
    <header className="border-b-2 px-8 py-4 flex justify-between">
      <h1>{config.siteName}</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        Login
      </button>
    </header>
  );
}

export default Header;
