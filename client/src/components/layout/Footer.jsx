import React from "react";
import config from "@app/utils/config";

function Footer() {
  return (
    <footer className="border-t-2 px-8 py-4">
      &copy; {new Date(Date.now()).getFullYear()} {config.siteName}
    </footer>
  );
}

export default Footer;
