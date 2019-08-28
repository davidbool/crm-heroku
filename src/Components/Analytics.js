import React, { Component } from 'react';
import Badges from './AnalyticsSubComp/Badges'
import Charts from './AnalyticsSubComp2/Charts'
import axios from 'axios'

class Analytics extends Component {
    constructor(){
        super()
        this.state ={
            clients: []
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
    render(){
        return(<div>
            <Badges clients ={this.state.clients} />
            <Charts clients ={this.state.clients} />
        </div>)
    }
}
export default Analytics