const title = <h1> Food villa </h1>;

const Header = () => {
  return (
    <div className="navbar">
      <ul>
        {title}
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
