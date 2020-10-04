import React ,{useState}from "react";
import { Input } from "semantic-ui-react";
import './Suppression.css';
import Modal from './Modal';


export default class DropDownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

 
handleChange = event => {
    this.setState({ searchInput: event.target.value }, () =>
      this.globalSearch()
    );
  };

globalSearch = () => {
    let { searchInput } = this.state;
    let filteredData = this.props.data.filter(value => {
      return (
        value.sln.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.lmb.toLowerCase().includes(searchInput.toLowerCase()) 
      );
    });
    this.props.handleSetData(filteredData);
  };

render() {
    return (
      <>
        <br />
        <Modal  />
        <div className="Input">
        <Input
          size="large"
          name="searchInput"
          value={this.state.searchInput || ""}
          onChange={this.handleChange}
          placeholder="Search"
          className="Input" />
          <i class="search icon" id="search"></i>
        </div>
        <br />
        <br />
      </>
    );
  }
}