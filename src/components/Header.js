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
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>work</a>
            </li>
            <li>
              <a href='/'>reach</a>
            </li>
            <li className='btn'>
              <a href='/'>Work</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
