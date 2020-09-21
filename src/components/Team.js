import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Datajson from '../Data/content';

const teamlist = Datajson.teams;

class Team extends Component{
    
    render(){
        return(
        <div className="bg-light page-section" id="team">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row">
              {
                teamlist?
                  teamlist.map((team,i) =>
                    <div key={i} className="col-sm-4">
                      <div className="team-member">
                        <img className="mx-auto rounded-circle" src={team.image} alt="" />
                        <h4> {team.name}</h4>
                        <p className="text-muted">{team.skill}</p>
                        <ul className="list-inline social-buttons">
                          <li className="list-inline-item">
                            <Link to="/home"><FontAwesomeIcon icon={faFacebookF} /></Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="/about"><FontAwesomeIcon icon={faTwitter} /></Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="/contact"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                )
                :<p>Please Wait</p>
              }
              </div>
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
              </div>
            </div>
          </div>            
        )
    }
}

export default Team;