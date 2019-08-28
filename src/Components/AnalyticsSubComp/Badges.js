import React, { Component } from 'react';
import NewUsersMonth from './NewUsersMonth'
import EmailsSent from './EmailsSent'
import OutstandingClients from './OutstandingClients'
import HottestCountry from './HottestCountry'
class Badges extends Component {

    getMonthlyClients =()=>{
        let dates = [...this.props.clients]
        dates.forEach(x => x.firstContact = new Date(x.firstContact))
        let today = new Date()
        let lastMonth = new Date()
        if(today.getMonth != 0){
            lastMonth = today.setMonth(today.getMonth() - 1)
        }
        else(
            lastMonth.setFullYear(today.getFullYear() - 1, 12, today.getDay()) 
        )
       let newMonthlyClients = dates.filter( c=> c.firstContact > lastMonth )
       return newMonthlyClients.length
    }
    getSentEmails = () =>{
        let sentEmails= this.props.clients.filter(c => c.emailType != null)
        return sentEmails.length
    }
    getOutstandingClients= () =>{
        let outstanding = this.props.clients.filter(c => c.sold == false)
        return outstanding.length
    }
    getHottestCountry =()=>{
        let countrys ={}
        let hottestCountry ={name: null, count: 0}
     for(let c of this.props.clients){
        if(countrys[c.country] == undefined){
            countrys[c.country] = 1
        }
        else{
            countrys[c.country] ++
            if(countrys[c.country] > hottestCountry.count){
                hottestCountry.name = c.country
            }
        }
     }
     return hottestCountry.name
    }
    render(){
        return(<div class="row">
            <NewUsersMonth newClinetsMonthly= {this.getMonthlyClients} />
            <EmailsSent getSentEmails = {this.getSentEmails} />
            <OutstandingClients getOutstandingClients={this.getOutstandingClients}  />
            <HottestCountry getHottestCountry ={this.getHottestCountry} />
        </div>)
    }
}

export default Badges