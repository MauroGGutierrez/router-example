import logoRV from "../assets/images/mercado-libre-logo.png"
import MenuItems from "./MenuItems";
import "./Header.css";

const Header = () => {
  const menuItems = [
    {link: '/', name: 'Home'},
    {link: '/about', name: 'About'},
    {link: '/contact', name: 'Contact'},
    {link: '/products', name: 'Products'}
  ]


  return (
    <div className="container">
      <nav className="header">
        <img src={logoRV} alt="logo" className="logo-mercado"/>
        <MenuItems menuItems={menuItems}/>
      </nav>
    </div>  
  )
}

export default Header