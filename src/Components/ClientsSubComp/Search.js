import React, { Component } from "react";

class Search extends Component {
    constructor(){
        super()
        this.state ={
            input: "",
            select: ""
        }
    }
    handleInput= (e) =>{
        this.setState({
            input: e.target.value
        })
    }
    handleSelect =(e) =>{
        this.setState({
            select: e.target.value
        })
    }
    search =(e) =>{
        this.props.searchResults(this.state.input, this.state.select)
    }

  render() {
    return (
      <div class="row">
      <div class="col s3"> 
      <input value={this.state.input} onChange={this.handleInput}/>
      </div>

        <div class="col s2">
          <input placeholder="Search by" type="text" class="validate" list = "Filetrs" value={this.state.select} onChange={this.handleSelect}/>
            <datalist id ="Filetrs" >
            <option value ={'First name'} />
            <option value ={'Surname'} />
            <option value ={'Country'} />
            <option value ={'Sold'} />
            </datalist>
          </div>

        <div class ="col s1">
          <a onClick ={this.search} class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">pageview</i></a>
          </div>
    </div>
    );
  }
}

export default Search;
