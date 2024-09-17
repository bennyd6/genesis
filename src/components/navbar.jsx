// import {NavLink, useLocation} from "react-router-dom" 
import './navbar.css'
function Navbar(){
    // const location = useLocation();
    // const isServicesActive = location.pathname.startsWith('/services');
    return(
        <div className="navbar-main">
            <a className='links' >Home</a>
            <a className='links'>Services</a>
            <a className='links'>About</a>
            <a className='links'>Contact</a>
            <a className='links'>User</a>
        </div>
    );
}

export default Navbar
