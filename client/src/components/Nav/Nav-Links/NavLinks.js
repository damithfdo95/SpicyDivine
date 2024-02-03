import { Link } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = () => {
    return ( 
            <nav className="nav__bottom__container">
                <div className="bottom__container">
                    <ul className="nav">
                        <li className='nav-link'><Link to="/">Home</Link></li> 
                        <li className='nav-link'><Link to="/shop">All Foods</Link> </li>
                        <li className='nav-link'><Link to="/category/men">Cakes</Link></li> 
                        <li className='nav-link'><Link to="/category/women">Set Menu</Link></li> 
                        <li className='nav-link'><Link to="/category/kids">Other</Link></li>
                    </ul>
                </div>
            </nav>
     );
}
 
export default NavLinks;