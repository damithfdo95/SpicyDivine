import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
    return ( 
        <footer>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header">
                            <h1>Help</h1>
                        </div>
                        <ul className="fotter__help__links">
                            <li className="help__link">
                                <a href="/"> Shipping</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Refund</a>
                            </li>
                            <li className="help__link">
                                <a href="/">FAQ</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Accessiblity</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Contact Us</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+81 80 1651 3896</span>
                            </li>
                            <li className="footer__contact">
                                <EmailIcon /> <span>spicydivine@gmail.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>Sendai, Japan</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            <h1>Stay Connected</h1>
                        </div>
                    <ul className="footer__social__links">
                            <li className="social__link">
                                <FacebookIcon />
                            </li>
                            <li className="social__link">
                                <WhatsAppIcon />
                            </li>
                            <li className="social__link">
                                <InstagramIcon />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fotter__copyright__container">
                    <ul className='nav'>
                        <li className="footer__copyright">Made with ❤ by Damith Fernando ©2024</li>
                    </ul>
                     </div>
            </div>
        </footer>
     );
}
 
export default Footer;