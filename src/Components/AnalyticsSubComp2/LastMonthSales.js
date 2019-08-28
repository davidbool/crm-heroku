import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
class LastMonthSales extends Component {

    generateChartData = () =>{
        let data = this.props.getLastMonthSales()
        return data
    }
    render(){
        const data = this.generateChartData()
        return(<div class="col s8">
            <h3>Last Month Sales</h3>
            <div>
            <LineChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5,}}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Sales" stroke="#8884d8" activeDot={{ r: 4 }} />
      </LineChart>
            </div>
        </div>)
    }
}

export default LastMonthSales

