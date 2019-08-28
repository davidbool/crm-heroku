import React, { Component } from "react";
import Client from "./ClientsSubComp/Client";
import PopUp from "./ClientsSubComp/PopUp";
import Search from "./ClientsSubComp/Search";
import Headers from "./ClientsSubComp/Headers";
import PageNav from "./ClientsSubComp/PageNav";

class Clients extends Component {
  constructor() {
    super();
    this.state = {
      popup: { status: false, client: null },
      search: { isSearch: false, results: [] },
      page: 1
    };
  }
  openPopUp = client => {
    let ob = { ...this.state.popup };
    ob.status = true;
    ob.client = client;
    this.setState({
      popup: ob
    });
  };
  closePopUp = () => {
    let ob = { ...this.state.popup };
    ob.status = false;
    ob.id = null;
    this.setState({
      popup: ob
    });
  };
  
  searchResults = (query, parm) => {
    let res
    if(parm == "First name" || parm == "Surname"){
      parm ="name"
     res = this.props.clients.filter(c => c[parm].includes(query));
    }
    if(parm == "Country"){
      parm ="country"
     res = this.props.clients.filter(c => c[parm].includes(query));
    }
    if(parm == "Sold"){
      parm ="sold"
     res = this.props.clients.filter(c => c[parm] == true);
    }
    let search = { isSearch: true, results: res };
    this.setState({
      search: search,
      page: 1
    });
  };
  
  nextpage =()=>{
    if(this.props.clients[(this.state.page + 1)*50] != undefined){
      this.setState({
        page: this.state.page + 1
      })
    }   
  }
  prevpage =()=>{
    if(this.state.page > 1){
      this.setState({
        page: this.state.page - 1
      })
    }   
  }

  render() {
    let searchResults = !this.state.search.isSearch ? this.props.clients : this.state.search.results
    let displayClients = {first : 50 * (this.state.page -1), last: 50 * this.state.page -1}
    let relevantClients = [...searchResults]
    relevantClients = relevantClients.splice(displayClients.first,50)
    console.log(displayClients)
    console.log(relevantClients)
    return (
      <div>
        <Search searchResults ={this.searchResults}/>
        <table class="responsive-table">
        <thead>
          <Headers />
        </thead>
        <tbody>
          {relevantClients.map(c => (<Client client={c} open={this.openPopUp} />))}
        </tbody>
      </table>
        {this.state.popup.status ? (
          <PopUp close={this.closePopUp} client={this.state.popup.client} update ={this.props.update} />
        ) : null}
        <PageNav displayClients={displayClients} nextpage={this.nextpage} prevpage={this.prevpage} />
      </div>



    );
  }
}

export default Clients;
