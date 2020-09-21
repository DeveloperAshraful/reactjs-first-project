import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import DataJson from '../Data/content';

const clientData = DataJson.clients;

class Clients extends Component{

    render(){
        return(
            <div className="py-5">
                <div className="container">
                    <div className="row">
                                                
                        {
                            clientData?
                                clientData.map((clnt,i) => 
                                    <div key={i} className="col-md-3 col-sm-6">
                                        <NavLink to="/about"><img className="img-fluid d-block mx-auto" src={clnt.logo} alt="Client" /></NavLink>
                                    </div>
                                )
                            :<p>Please Wait..</p>
                        }
                        
                    </div>
                </div>
            </div>           
        )
    }
}
export default Clients;