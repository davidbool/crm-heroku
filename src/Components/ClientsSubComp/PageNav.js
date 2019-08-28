import React, { Component } from 'react';

class PageNav extends Component {

    nextPage =()=>{
        this.props.nextpage()
    }
    prevPage = () => {
        this.props.prevpage()
    }
    render(){
        let first = this.props.displayClients.first
        first ++
        let last = this.props.displayClients.last
        last ++
        return(<div>
            <div class="center-align"> 
            <span onClick ={this.prevPage} ><i class="material-icons">arrow_back</i> </span>
            {first + "-" + last}
            <span onClick ={this.nextPage} > <i class="material-icons">arrow_forward</i></span>
            </div>
        </div>)
    }
}

export default PageNav