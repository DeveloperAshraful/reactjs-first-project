import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


class ContactPage extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Contact />
                <Footer />
            </Fragment>
        )
    }
}
export default ContactPage;