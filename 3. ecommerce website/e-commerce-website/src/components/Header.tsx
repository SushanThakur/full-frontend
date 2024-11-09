const brandName = 'NeXon';
const loggedOutItems = [
  {
    id: 1,
    itm: 'Help & Support',
    href: '/Help',
  },
  {
    id: 2,
    itm: 'Log In',
    href: '/LogIn',
  },
  {
    id: 2,
    itm: 'Sign Up',
    href: '/SignUp',
  },
];
const loggedInItems = [
  {
    id: 1,
    itm: 'Help & Support',
    href: '/Help',
  },
  {
    id: 2,
    itm: 'Cart',
    href: '/Cart',
  },
  {
    id: 3,
    itm: 'Profile',
    href: '/Profile',
  },
  {
    id: 4,
    itm: 'Log Out',
    href: '/LogOut',
  },
];
import { Link } from "react-router-dom";

const Header = (props: { logStatus: string }) => {

  const navItems = props.logStatus === 'false' ? loggedOutItems : loggedInItems;

  return (
    <div className="flex items-center justify-center">
      <header className="flex flex-row w-[90vw] max-w-[1400px items-center justify-between">
        <Link to='/' className="text-2xl font-bold p-4 ">{brandName}</Link>
        <nav className=" hidden flex-row gap-8 text-xl items-center justify-center md:inline-flex ">
          {navItems.map(itm => (

            <Link to={itm.href} key={itm.id}>{itm.itm}</Link>
          ))}
        </nav>
      </header>
    </div>
  )
}
export default Header
