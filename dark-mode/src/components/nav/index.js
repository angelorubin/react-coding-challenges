import React from "react";
import "./_styles.scss";

function Nav({ children }) {
  return <ul className="nav">{children}</ul>;
}

export default Nav;
