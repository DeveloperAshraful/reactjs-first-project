import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import Clients from '../components/Clients';
import Footer from '../components/Footer';


class ClientPage extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Clients />
                <Footer />
            </Fragment>
        )
    }
}
export default ClientPage;