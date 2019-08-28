import React, { Component } from 'react';
import {PieChart, Pie, Legend, Tooltip,} from 'recharts';
class ClientAcquisition extends Component {

    getLastMonth = () =>{
        let lastMonth = new Date()
        lastMonth.setMonth(lastMonth.getMonth() -1)
        lastMonth = new Date(lastMonth)
        let clientsNum = this.props.getClientsByDate(lastMonth).length
        return clientsNum
    }
    getSecondHalf =() =>{
        let lastYear = new Date()
        lastYear.setFullYear(lastYear.getFullYear() -1)
        lastYear = new Date(lastYear)
        let lastSixMonths = new Date()
        lastSixMonths.setMonth(lastSixMonths.getMonth() -6)
        lastSixMonths = new Date(lastSixMonths)
        let clientsNum = this.props.getClientsByDate(lastYear, lastSixMonths).length
        return clientsNum
    }
    getBeforeLastYear = ()=>{
        let lastYear = new Date()
        lastYear.setFullYear(lastYear.getFullYear() -1)
        lastYear = new Date(lastYear)
        let clientsNum = this.props.clients.length - this.props.getClientsByDate(lastYear).length
        return clientsNum
    }
    generateChartData=()=>{
        let data =[
         {name : "Last Month: " + this.getLastMonth(), value :this.getLastMonth()},
         {name : "6-12 Months: " + this.getSecondHalf(), value :this.getSecondHalf()},
         {name : ">12 Months: " + this.getBeforeLastYear(), value :this.getBeforeLastYear()},
        ]
        return data
    }
    render(){
        const data01 = this.generateChartData()
        
        return(<div class="col s4">
            <h3>Client Acqusition</h3>
            <div>
            <PieChart width={400} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />        <Tooltip />
      </PieChart>
            </div>
        </div>)
    }
}

export default ClientAcquisition