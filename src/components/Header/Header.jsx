import { useState } from 'react';
import logo from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="border-gray-200 px-4 md:px-6 py-2.5 bg-gray-800 sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
                <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
            </Link>
            <div className="flex items-center">
                <button onClick={() => setMenuOpen(!menuOpen)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className={`${menuOpen ? 'block' : 'hidden'} justify-between items-center w-full md:flex md:w-auto`} id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded border-b border-gray-700 md:border-none md:hover:bg-transparent md:p-0 hover:text-yellow-600 hover:bg-gray-700" aria-current="page">Shop</Link>
                    </li>
                    <li>
                        <Link to="/order" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 hover:text-yellow-600 hover:bg-gray-700 md:hover:bg-transparent border-gray-700">Order</Link>
                    </li>
                    <li>
                        <Link to="/inventory" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 hover:text-yellow-600 hover:bg-gray-700 md:hover:bg-transparent border-gray-700">Manage Inventory</Link>
                    </li>
                    <li>
                        <Link to="/login" className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 hover:text-yellow-600 hover:bg-gray-700 md:hover:bg-transparent border-gray-700">Log In</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
};

export default Header;