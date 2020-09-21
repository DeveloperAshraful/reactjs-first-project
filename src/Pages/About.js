import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';


class AboutPage extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <About />
                <Footer />
            </Fragment>
        )
    }
}
export default AboutPage;