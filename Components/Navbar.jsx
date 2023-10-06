import Home from './Home';
import { Fragment } from 'react';

const Navbar = () => {
  const navElements = [
    {
      link: 'Home',
      url: '/',
    },
    {
      link: 'About',
      url: '/about',
    },
    {
      link: 'Contact',
      url: '/contact',
    },
  ];
  return (
    <Fragment style={{ display: 'flex', flexFlow: 'row' }}>
      <ul style={{ display: 'flex' }}>
        {navElements.map((navElement, index) => {
          return (
            <li style={{ padding: '10px 10px', listStyle: 'none' }} key={index}>
              {navElement.link}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Navbar;
