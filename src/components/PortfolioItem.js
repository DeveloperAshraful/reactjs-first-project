import React, {Component, Fragment} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Datajson from '../Data/content';

const portfoliolist = Datajson.portfolios;

class PortfolioItem extends Component{
    
    render(props) {
       
        return(
            <Fragment>
                { 
                portfoliolist?
                    portfoliolist.map((portfolio,i) =>
                        <div key={i} className="col-md-4 col-sm-6 portfolio-item">
                            <Link className="portfolio-link" data-toggle="modal" to="">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <FontAwesomeIcon icon={faPlus} size="lg" />
                                    </div>
                                </div>
                                <img className="img-fluid" src={portfolio.image} alt="" />
                            </Link>
                            <div className="portfolio-caption">
                                <h4>{portfolio.title}</h4>
                                <p className="text-muted">{portfolio.skill}</p>
                            </div>
                        </div>
                    )
                    :<p>Please Wait..</p>
                }            
            </Fragment>
        )
    }
}
export default PortfolioItem;