import React, { Component } from 'react';

class HottestCountry extends Component {
    getHottestCountry=()=>{
       return this.props.getHottestCountry()
    }
    render(){
        return(<div class ="col s3" >
            <div class ="col s6">
            <i id="HottestCountry" class="fas fa-globe-americas"></i>
            </div>
            <div class ="col s6">
            <h1>{this.getHottestCountry()}</h1>
            <span>Hottest Country</span>
            </div>
        </div>)
    }
}

export default HottestCountry