import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Github Repos</Link>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
