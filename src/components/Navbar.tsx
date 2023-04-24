import React from "react";
import Button from "./Button";

export default function navbar() {
  return (
    <div className="navbar">
      <nav>
        <a href="/">Moving Company</a>
        <div className="nav-search">
          <input type="search" name="search" placeholder="Search" id="search" />
          <Button></Button>
        </div>
      </nav>
    </div>
  );
}
