import React from "react";

export default function navbar() {
  return (
    <div className="navbar">
      <nav>
        <a href="/">Moving Company</a>
        <div className="nav-search">
          <input type="search" name="search" placeholder="Search" id="search" />
          <button>Search</button>
        </div>
      </nav>
    </div>
  );
}
