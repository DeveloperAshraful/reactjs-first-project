import React, {Component}  from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component{
    render(){
        return(
                
            <div className="footer">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                    <span className="copyright">Copyright &copy; Your Website 2019</span>
                    </div>
                    <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item"><Link to="/about"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                        <li className="list-inline-item"><Link to="#"><FontAwesomeIcon icon={faTwitter} /></Link></li>
                        <li className="list-inline-item"><Link to="#"><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                    </ul>
                    </div>
                    <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li className="list-inline-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li className="list-inline-item"><Link to="/terms-of-use">Terms of Use</Link></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>

        )
    }
}
export default Footer;