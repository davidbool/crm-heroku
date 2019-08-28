import React, { Component } from "react";

class Client extends Component {
    constructor(){
        super()
        this.state ={}
    }
    openPopUp =() =>{
        this.props.open(this.props.client)
    }
    render(){
        let c = this.props.client
        return(
            <tr onClick ={this.openPopUp}>
             <td>{c.name.split(" ")[0]}  </td>
               <td>{c.name.split(" ")[1]}  </td>
               <td>{c.country}  </td>
               <td>{c.firstContact.split("T")[0]}  </td>
               <td>{c.emailType}  </td>
               <td>{c.sold ? <i class="material-icons">check</i> : null}  </td>
               <td>{c.owner}  </td>    
            </tr>
        )
    }
}
export default Client
