import React, { Component } from 'react';

class PopUp extends Component {
    constructor(props){
        super(props)
        this.state ={
            name: this.props.client.name.split(" ")[0],
            surname: this.props.client.name.split(" ")[1],
            country: this.props.client.country,
        }
    }
    close = () =>{
        this.props.close()
    }
    handleName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    handleSurname = (e) =>{
        this.setState({
            surname: e.target.value
        })
    }
    handleCountry = (e) =>{
        this.setState({
            country: e.target.value
        })
    }
    update =() =>{
        let name = this.state.name + " " + this.state.surname
        let client = this.props.client
        client.name =name
        client.country = this.state.country
        this.props.update(client)
        this.close()
    }
    render(){
        return(
        <div id="popUp" class ="card red lighten-3">
            <a class="btn-floating red lighten-1" onClick ={this.close}><i class="material-icons">close</i></a>
           <div>Name: <input value={this.state.name} onChange={this.handleName}/></div>
           <div>Surname: <input value={this.state.surname} onChange={this.handleSurname} /></div>
           <div>Country: <input value={this.state.country} onChange={this.handleCountry} /></div>
           <div class="center-align">
           <a class="waves-effect waves-light btn red lighten-1" onClick ={this.update}>Update</a>
           </div>
        </div>
        )
    }
}

export default PopUp