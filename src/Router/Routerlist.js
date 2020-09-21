import React, { Component } from 'react';

import HomePage from '../Pages/Home';
import AboutPage from '../Pages/About';
import PortfolioPage from '../Pages/Portfolio';
import ServicePage from '../Pages/Service';
import TeamPage from '../Pages/Team';
import ClientPage from '../Pages/Clients';
import ContactPage from '../Pages/Contact';
import Notfound from '../Pages/Notfound';

import { Switch, Route } from "react-router-dom";

class Routerlist extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route exact path="/about" component={AboutPage}></Route>
                <Route exact path="/service" component={ServicePage}></Route>
                <Route exact path="/Portfolio" component={PortfolioPage}></Route>
                <Route exact path="/team" component={TeamPage}></Route>
                <Route exact path="/client" component={ClientPage}></Route>
                <Route exact path="/contact" component={ContactPage}></Route>
                <Route exact component={Notfound}></Route>
            </Switch>
        )
    }
}
export default Routerlist;