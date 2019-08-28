import React, { Component } from 'react';

class EmailsSent extends Component {
    getEmailsSent = () =>{
        return this.props.getSentEmails()
    }
    render(){
        return(<div class="col s3">
            <div class ="col s6">
            <i id= "EmailsSent" class="far fa-envelope"></i>
            </div>
            <div class ="col s6">
            <h1>{this.getEmailsSent()}</h1>
            <span>Emails Sent</span>
            </div>
        </div>)
    }
}

export default EmailsSent