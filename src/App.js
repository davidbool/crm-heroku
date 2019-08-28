import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clients from './Components/Clients'
import Actions from './Components/Actions';
import Analytics from './Components/Analytics';
const axios = require('axios')


class App extends Component {
  constructor(){
    super()
    this.state = {
      onPage : "",
      clients :[]
    }
  }
  changePage(page){
    this.setState ={
      onPage: page
    }
  }
  async getClients(){
    return axios.get('/clients')
  }
  async componentDidMount() {
    const response = await this.getClients()
    this.setState({
      clients: response.data
    })
  }
  update =(info) =>{
    axios.post('/update', info).then( (response) =>{
      this.componentDidMount()
  })
  }
  addClient = (client) =>{
    axios({
      method: 'put',
      url: '/addClient',
      data: {client}
    })
  .then( (response) =>{
      console.log(response)
      this.componentDidMount()
    })  
  }

  render() {
    return (
        <div>
      <Router>
       <div>
       <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo right">CRM</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><Link to = "/clients">Clients</Link></li>
        <li><Link to = "/actions" >Actions</Link></li>
        <li><Link to = "/analytics" >Analytics</Link></li>
      </ul>
    </div>
       </nav>
       </div>
      <div>
    <Route exact path="/clients" render = {() => <Clients clients ={this.state.clients} update ={this.update} />} />
        <Route exact path="/actions" render = {() => <Actions clients ={this.state.clients} update ={this.update} addClient ={this.addClient} /> } />
        <Route exact path="/analytics" render ={() => <Analytics /> } />
      </div>
      </Router>
        </div>
    );
  }
}
export default App;