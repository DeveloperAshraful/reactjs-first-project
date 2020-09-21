import React, {Component} from 'react';
import {Link} from "react-router-dom";
//import { Container,Navbar,Nav,NavLink } from 'react-bootstrap';
import DataJson from '../Data/content';

const bannerData = DataJson.banners;

class Banner extends Component{

    render(props){
      return(
        <div className="masthead">
          <div className="container">
          { 
            bannerData?
              bannerData.map((banner,i) =>
                  <div key={i} className="intro-text">
                    <div className="intro-lead-in"> {banner.subtitle}</div>
                    <div className="intro-heading text-uppercase">{banner.title}</div>
                    <Link className="btn btn-primary btn-lg text-uppercase js-scroll-trigger" to={banner.link}>{banner.button}</Link>
                  </div> 
              )
              :<p>Please Wait..</p>
            }
          </div>
        </div>
      )
    }
}
export default Banner;