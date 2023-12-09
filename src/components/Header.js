import { LOGO_URL } from "./utils.js/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="site logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUs</li>
          <li>Cart</li>
          <button className="login-btn">Login</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
