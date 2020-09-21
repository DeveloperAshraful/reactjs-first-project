import React, {Component} from 'react';


class RestaurantList extends Component{
 
    constructor(){
        super();
        this.state={
            list: null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/posts").then((response) => {
            response.json().then((result) => {
                this.setState({list:result})
            })
        })
    }

    render(){
        //console.warn(this.state)
        return(
            <div className="restaurant-area">
                {
                    this.state.list?
                    <div className="restaurant-item">
                        {
                            this.state.list.map((item,i) => 
                                <h4 key={i}>{item.title}</h4>
                            )
                        }
                    </div>
                    :<p>Please Wait..</p>
                }
            </div>
        )
    }
}
export default RestaurantList;