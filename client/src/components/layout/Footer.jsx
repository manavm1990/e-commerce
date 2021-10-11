import config from "@app/utils/config";
import React from "react";

function Footer() {
  return (
    <footer className="py-2 text-center">
      &copy; {new Date(Date.now()).getFullYear()} {config.siteName}
    </footer>
  );
}

export default Footer;
