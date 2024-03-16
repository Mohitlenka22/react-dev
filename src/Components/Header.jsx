import { Link } from 'react-router-dom';

const title = <h1> Food villa </h1>;

const Header = () => {
  return (
    <div className='m-2.5 '> {/* navbar */}
      <ul className="flex justify-between">
        {title}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
        <li>
          <Link>Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
