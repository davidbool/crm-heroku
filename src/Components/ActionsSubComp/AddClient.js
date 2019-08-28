import React, { Component } from 'react';

class AddClient extends Component {
    constructor(){
        super()
        this.state ={
            FirstName: "",
            SureName: "",
            Country: "",
            Owner: ""        }
    }
    handleFirstName =(e)=>{
        this.setState({
            FirstName: e.target.value
        })
    }
    handleSureName =(e)=>{
        this.setState({
            SureName: e.target.value
        })
    }
    handleCountry =(e)=>{
        this.setState({
            Country: e.target.value
        })
    }
    handleOwner =(e)=>{
        this.setState({
            Owner: e.target.value
        })
    }
    createClient =() =>{
        let name = this.state.FirstName + " " + this.state.SureName
        let cliet = {
            name: name,
            country: this.state.Country,
            owner: this.state.Owner
        }
        this.props.addClient(cliet)
        this.resetState()
    }
    resetState =()=>{
        this.setState({
            FirstName: "",
            SureName: "",
            Country: "",
            Owner: "" 
        })
    }
    render(){
        return(<div>
            <h3>Add Client:</h3>
            <div class="row">
    <form class="col s6">
      <div class="row">
        <div class="input-field col s6">
          <input value ={this.state.FirstName} onChange ={this.handleFirstName} placeholder ="First name" id="first_name" type="text" class="validate" />
        </div>
        <div class="input-field col s6">
          <input value ={this.state.SureName} onChange ={this.handleSureName} id="last_name" placeholder ="Last name" type="text" class="validate" />
        </div>
        <div class="col s6">
        <input value ={this.state.Country} onChange ={this.handleCountry} placeholder ="Country" id="first_name" type="text" class="validate" />
        </div>
        <div class="col s6">
        <input value ={this.state.Owner} onChange ={this.handleOwner} placeholder ="Owner" id="first_name" type="text" class="validate" />
        </div>
            <div class="center-align">
                <a class="waves-effect waves-light btn red lighten-1" onClick={this.createClient}>
                    <i class="material-icons left">add_circle_outline</i>New Cliet</a>
                </div>
      </div>
      </form>
      </div>
        </div>)
    }
}

export default AddClient