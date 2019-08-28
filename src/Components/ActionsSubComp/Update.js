import React, { Component } from 'react';

class Update extends Component {
    constructor(){
        super()
        this.state ={
            client : "",
            owner: "",
            email: "",
        }
    }
    generateOwners = () =>{
        let owners =[]
        let clients =this.props.clients
       for(let client of clients){
           if(owners.find(o => client.owner == o) == undefined){
               owners.push(client.owner)
           }
       }
       return owners
    }


    handleClient = (e) =>{
        this.setState({
            client: e.target.value
        })
    }
    handleOwner = (e) =>{
        this.setState({
            owner: e.target.value
        })
    }
    handleEmail = (e) =>{
        this.setState({
            email: e.target.value
        })
    }

    changeOwner =() =>{
        let client = this.props.clients.find(c => this.state.client == c.name)
        client.owner = this.state.owner
        this.props.update(client)
        this.resetState()
    }
    changeEmail =() =>{
        let client = this.props.clients.find(c => this.state.client == c.name)
        client.emailType =this.state.email
        this.props.update(client)
        this.resetState()
    }
    changeSale =() =>{
        let client = this.props.clients.find(c => this.state.client == c.name)
        client.sold = true
        this.props.update(client)
    }
    resetState= ()=>{
        this.setState({
            owner: "",
            email: ""
        })
    }
  
    render(){
        return(<div >
            <h3>Update:</h3>
            <div class="row">
          <div class="input-field col s2">
          <i class="material-icons prefix">account_circle</i>
            <input id="icon_prefix" class="validate" placeholder="Full Name" list = "clients" type="text" value={this.state.client} onChange={this.handleClient} />
            <datalist id ="clients" >
            {this.props.clients.map(c => <option value ={c.name} />)}
            </datalist>
            </div>
          </div>
          <div class="row">
          <div class="col s1">Transfer Ownership To:</div>
            <div class="col s2"><input  type="text" class="validate" list = "owners" value={this.state.owner} onChange={this.handleOwner}/></div>
            <div class="col s2">
            <a class="waves-effect waves-teal btn-flat yellow-text" onClick ={this.changeOwner}>Transfer</a>
            </div>
            <datalist id ="owners" >
            {this.generateOwners().map(o => <option value ={o} />)}
            </datalist>
      </div>
          <div class="row">
          <div class="col s1"> Sent email:</div>
            <div class="col s2"><input  type="text" class="validate" list = "emails" value={this.state.email} onChange={this.handleEmail}/></div>
            <datalist id ="emails" >
            <option value ={'A'} />
            <option value ={'B'} />
            <option value ={'C'} />
            <option value ={'D'} />
            </datalist>
            <div class="col s2">
            <a class="waves-effect waves-teal btn-flat yellow-text" onClick ={this.changeEmail}>Send</a>
            </div>
      </div>
          <div class="row">
          <div class="col s1"> Declare sale:</div>
            <div class="col s2"></div>
            <div class="col s2">
            <a class="waves-effect waves-teal btn-flat yellow-text" onClick ={this.changeSale}>Declare sale!</a>
            </div>
      </div>
        </div>)
    }
}

export default Update