import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import Service from '../components/Service';
import Footer from '../components/Footer';


class ServicePage extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Service />
                <Footer />
            </Fragment>
        )
    }
}
export default ServicePage;