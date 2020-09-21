import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Service from '../components/Service';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Team from '../components/Team';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


class HomePage extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Banner />
                <Service />
                <Portfolio />
                <About />
                <Team />
                <Clients />
                <Contact />
                <Footer />
            </Fragment>
        )
    }
}
export default HomePage;