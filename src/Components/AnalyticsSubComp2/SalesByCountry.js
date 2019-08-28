import React, { Component } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
class SalesByCoutry extends Component {
    generateChartData =()=>{
        let countrySalesObjct = this.props.getSalesByCountry()
        let data = []
        for(let country in countrySalesObjct){
            data.push({name: country, Sales: countrySalesObjct[country]})
        }
        return data
    }
    render(){
        const data = this.generateChartData()
        return(<div class="col s6">
            <h3>Sales By Country</h3>
            <div>
             <BarChart width={500} height={300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Sales" fill="#82ca9d" />
      </BarChart>
            </div>
        </div>)
    }
}

export default SalesByCoutry