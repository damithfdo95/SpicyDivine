import './Landing.css'
import land from '../../asset/brand/men2.png'
import { Link } from "react-router-dom"
import { Button } from "@mui/material";

const Landing = () => {
    return ( 
        <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    <h3 className="landing__header__discount">Sri Lankan Cuisine</h3>
                    <h1 className="landing__header__main">Stay tuned for something untasted!</h1>
                    <Link to="/shop">
                        <Button variant='outlined' sx={[ {width: '190px', height: '50px', borderRadius: '20px' , fontWeight: '700', backgroundColor: '#e6e6e6', borderColor: '#e6e6e6', color: 'black' }, {'&:hover': {  backgroundColor: "black" , color: "#FFE26E", borderColor: 'black'}}]}>ORDER NOW</Button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;