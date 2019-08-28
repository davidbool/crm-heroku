import React, { Component } from 'react';
import Update from './ActionsSubComp/Update'
import AddClient from './ActionsSubComp/AddClient'
class Actions extends Component {
    render(){
        return(<div>
                <Update clients ={this.props.clients} update ={this.props.update} />
                <AddClient addClient = {this.props.addClient} />
        </div>)
    }
}

export default Actions