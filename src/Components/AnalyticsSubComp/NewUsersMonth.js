import React, { Component } from 'react';

class NewUsersMonth extends Component {

    newClintsMontly = () =>{
        return this.props.newClinetsMonthly()
    }
    render(){
        return(<div class= "col s3">
            <div class ="col s6">
            <i id="NewUsersMonth" class="fas fa-chart-line"></i>
            </div>
            <div class ="col s6">
           <h1>{this.newClintsMontly()}</h1>
           <div>New August Clients </div>
            </div>
        </div>
        )
    }
}

export default NewUsersMonth