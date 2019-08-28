import React, { Component } from 'react';

class OutstandingClients extends Component {
    getOutstandingClients = ()=>{
        return this.props.getOutstandingClients()
    }
    render(){
        return(<div  class="col s3">
             <div class ="col s6">
            <i id="OutstandingClients" class="fas fa-user-circle"></i>
           </div>
           <div class ="col s6">
            <h1>{this.getOutstandingClients()}</h1>
            <span>Outstanding Clients</span>
           </div>
        </div>
        )
    }
}

export default OutstandingClients