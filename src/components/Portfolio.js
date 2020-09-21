import React, {Component} from 'react';
import PortfolioItem from '../components/PortfolioItem';

//function Portfolio(props){
class Portfolio extends Component{

  render(){
        return(
          <div className="bg-light page-section" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">Portfolio</h2>
                  <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
              </div>
              <div className="row"><PortfolioItem /></div>
            </div>
          </div>
        )
  }

}
export default Portfolio;