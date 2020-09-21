import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';


class PortfolioPage extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Portfolio />
                <Footer />
            </Fragment>
        )
    }
}
export default PortfolioPage;