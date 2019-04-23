import React from 'react';

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      {props.children}
      <nav>
        <ul>
          <li>
            <a href="/">HOme</a>
          </li>
          <li>
            <a href="/">HOme</a>
          </li>

          <li>
            <a href="/">HOme</a>
          </li>

          <li>
            <a href="/">HOme</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
