import React from "react";

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>Ian M.</div>
        <nav>
          <ul>
            <li>
              <a href='/'>about</a>
            </li>
            <li>
              <a href='/'>Work</a>
            </li>
            <li className='btn'>
              <a href='/'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
