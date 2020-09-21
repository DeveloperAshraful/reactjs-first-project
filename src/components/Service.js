import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import Datajson from '../Data/content';

const servicelist = Datajson.services;


class Service extends Component{

    render(){
      return(

        <div className="page-section" id="services">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Services</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row text-center">
          
                {  
                  servicelist?
                    servicelist.map((service,i) =>
                      <div key={i} className="col-md-4">  
                        <span className="fa-stack fa-4x">
                          <FontAwesomeIcon className="text-primary" icon={faLaptop} size="lg" />
                        </span>
                        <h4 className="service-heading">{service.title}</h4>
                        <p className="text-muted">{service.des}</p>
                      </div>
                    )
                  :<p>Please Wait..</p>
                }

              </div>
            </div>
        </div>
      )
    }
}

export default Service;