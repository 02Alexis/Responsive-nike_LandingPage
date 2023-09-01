import NikeLogo from "../assets/logo.png";
import MagnifyingGlass from "../assets/magnifying glass.png";
import Cart from "../assets/cart.png";

function Navbar({ navbarStyle, handleSidebar }) {
  const navbarMenu = [
    {
      name: "Men",
      link: "#",
    },
    {
      name: "Women",
      link: "#",
    },
    {
      name: "Kids",
      link: "#",
    },
    {
      name: "Customize",
      link: "#",
    },
    {
      name: "Sale",
      link: "#",
    },
  ];
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <a href="/">
          <img src={NikeLogo} alt="Nike Logo" />
        </a>
      </div>

      <div className="navbar__menu">
        {navbarMenu.map((menu, index) => (
          <a
            href={menu.link}
            key={index}
            className={`${(index == 0 ? "active" : "")}`}
          >
            {menu.name}
          </a>
        ))}
      </div>

      <div className={`navbar__search ${navbarStyle || 'navbar-one'}`}>
        <img src={MagnifyingGlass} alt="MagnifyingGlass" />
        <input type="text" />
      </div>
      <div className={`navbar__cart ${navbarStyle || 'navbar-one'}`}>
        <img src={Cart} alt="cart" />
      </div>
    </div>
  );
}

export default Navbar;
