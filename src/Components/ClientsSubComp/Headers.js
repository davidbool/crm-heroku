import React, { Component } from 'react';

class Headers extends Component {
    render(){
        return(<tr>
            <th> Sureame </th>
            <th> Firstname </th>
            <th> Country </th>
            <th> firstContact </th>
            <th> EmailType </th>
            <th> Sold </th>
            <th> Owner </th>
        </tr>
        )
    }
}

export default Headers