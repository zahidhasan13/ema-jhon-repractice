import logo from '../../assets/Logo.svg'
const Header = () => {
    return (
        <nav className='bg-[#1C2B35] flex justify-between items-center px-8 py-2'>
            <img src={logo} alt="" />
            <ul className='flex space-x-4'>
                <li className='text-white hover:text-yellow-500'><a href="/shop">Shop</a></li>
                <li className='text-white hover:text-yellow-500'><a href="/review">Order Review</a></li>
                <li className='text-white hover:text-yellow-500'><a href="/inventory">Inventory</a></li>
                <li className='text-white hover:text-yellow-500'><a href="/login">Login</a></li>
            </ul>
        </nav>
    );
};

export default Header;