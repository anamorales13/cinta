import axios from 'axios';
import React, { Component } from 'react';

class primera extends Component {
    
    state={
        user:{}
    }

    componentWillMount(){
        this.getUser();
    }

    getUser(){
        axios.get('http://localhost:3900/api/user/Ana')
            .then(res=>{
                this.setState({
                    user:res.data.articles
                }
                )
            })
        
    }

    render() {
       
        return (
            <div id="Home">
                <label>Nombre: {this.state.user}</label>
                <label>correo: {this.state.correo}</label>
              
            </div>
        );

    }
}

export default primera;