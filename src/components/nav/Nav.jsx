import React from "react";
import { navItems } from "./navItems";

export default function Nav() {
  return (
    <nav className="nav" id="nav">
      <ul className="nav-menu">
        {navItems.map((item) => (
          <li key={item.id}>
            <a href={`#${item.name}`}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
