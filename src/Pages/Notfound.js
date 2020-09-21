import React, {Component, Fragment} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NotFound from '../components/NotFound';

class NotoundPage extends Component {
    render(){ 
        return (
            <Fragment>
                <Header />
                <NotFound />
                <Footer />
            </Fragment>
        );
    }
}
 
export default NotoundPage;