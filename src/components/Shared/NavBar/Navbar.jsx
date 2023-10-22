import logo from '../../../assets/img/logo1.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav flex items-center justify-center'>
            <img src={logo}alt="" width={'70px'} height={'80px'}/>
            <h2 className="text-2xl text-white">Espresso Emporium</h2>
        </div>
    );
};

export default Navbar;