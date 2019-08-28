import React, { Component } from 'react';
import TopEmployees from './TopEmployees'
import LastMonthSales from './LastMonthSales'
import SalesByCountry from './SalesByCountry'
import ClientAcquisition from './ClientAcquisition'
class Charts extends Component {
    getTopEmployess = ()=>{
        let employeesSales = {}
        for(let client of this.props.clients){
            if(employeesSales[client.owner] == undefined){
                employeesSales[client.owner] = 1
            }
            else{
                employeesSales[client.owner] ++
            }
        }
        let TopEmlpoyees = []
        let slaes = Object.values(employeesSales)
        slaes.sort(function(a, b){return b - a})
        for(let sale of slaes){
            for(let employee in employeesSales){
                if(employeesSales[employee] == sale){
                    TopEmlpoyees.push({name: employee, sales : sale})
                    employeesSales[employee] = 0
                    break
                }
            }
        }
        return TopEmlpoyees
    }
    getSalesByCountry = ()=>{
        let countrySales ={}
        for(let client of this.props.clients){
            if(client.sold == true){
                if(countrySales[client.country]==undefined){
                    countrySales[client.country] = 1
                }
                else{
                    countrySales[client.country]++
                }
            }
        }
        return countrySales
    }
    getClientsByDate = (fromDate,toDate = new Date()) =>{
        let dates = [...this.props.clients]
        dates.forEach(c => c.firstContact = new Date(c.firstContact))
        return dates.filter(c => c.firstContact > fromDate && c.firstContact < toDate)
    }
    getLastMonthSales =() =>{
        let today = new Date()
        let lastMonth = new Date()
        lastMonth.setMonth(today.getMonth() - 1)
        lastMonth = new Date(lastMonth)
        let salse = this.getClientsByDate(lastMonth)
        let MonthlySales = []
        while(lastMonth <= today){
            let salesCounter = salse.filter(x => x.firstContact.getMonth() == lastMonth.getMonth() && x.firstContact.getDate() == lastMonth.getDate()).length
            MonthlySales.push({date: lastMonth.toString().slice(3,10), Sales: salesCounter})
            lastMonth.setDate(lastMonth.getDate() + 1)
        }
        return MonthlySales
    }

    render(){
        return(<div class= "row">
            <div class= "row">
            <TopEmployees getTopEmployess ={this.getTopEmployess} />
            <SalesByCountry getSalesByCountry={this.getSalesByCountry} />
            </div>
            <div class= "row">
            <LastMonthSales getLastMonthSales ={this.getLastMonthSales} />
            <ClientAcquisition getClientsByDate={this.getClientsByDate} clients ={this.props.clients} />
            </div>
        </div>)
    }
}

export default Charts