import React, {Component, Fragment} from 'react';

import Header from '../components/Header';
import Team from '../components/Team';
import Footer from '../components/Footer';

class TeamPage extends Component{
    render(){
        return(
            <Fragment>
                <Header />
                <Team />
                <Footer />
            </Fragment>
        )
    }
}
export default TeamPage;