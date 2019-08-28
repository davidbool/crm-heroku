import React, { Component } from 'react';
import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
class TopEmlployees extends Component {
    generateChartData =() =>{
        return this.props.getTopEmployess().splice(0,3)
    }
    render(){
        const data = this.generateChartData()
        
              return(<div calss="col s6">
                  <h3>Top Emlployees</h3>
              <div>
                   <ComposedChart layout="vertical" width={500} height={400} data={data} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" barSize={30} fill="#413ea0" />
      </ComposedChart>
              </div>
        </div>)
    }
}

export default TopEmlployees