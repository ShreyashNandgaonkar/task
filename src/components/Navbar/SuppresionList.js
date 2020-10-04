import React from "react";
import './Suppression.css';
import ReactDOM from "react-dom";
import GlobalSearchComponent from "./GlobalSearchComponent";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";
import data from  './data'
import columns from  './column';
import ProcessingQue from './ProcessingQue';
import 'semantic-ui-css/semantic.min.css';
import DemoLoader from './DemoLoader'



class SuppresionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      columns: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    this.getData();
    this.getColumns();
  }

  getColumns = () => {
    this.setState({ columns });
  };

  getData = () => {
    this.setState({ data, filteredData: data });
  };

  handleSetData = data => {
    console.log(data);
    this.setState({ filteredData: data });
  };

  
  render() {
    let { filteredData, columns } = this.state;
    return (
      <div className="Suppression">
      
      <div className="gbs"> 
            <GlobalSearchComponent data={this.state.data} handleSetData={this.handleSetData} />
      </div>
      <h4 className="suppresionRecords"> Total Suppresion Records: <i class="users icon"></i><div className="Number">15556</div>  </h4>
        <div className="React-table">
            <ReactTable style={{'borderBottom': 'none','borderLeft': 'none','borderRight': 'none', color: 'rgb(90, 90, 81)' }} data={filteredData} columns={columns} defaultPageSize={4} getTheadThProps={()=>{return{style:{fontWeight:'600'}}}} getTheadProps={()=>{return{style:{boxShadow:'none', borderBottom:'1px solid rgba(0,0,0,0.05)'}}}} getPaginationProps={()=>{return{style:{backgroundColor:'transparent', border:'none', boxShadow:'none', width:'40rem', marginLeft:'24rem'}}}} />
        </div>

        <div className="Process">
        
        <h4 className="Heading">Processing Queue</h4>
        <h5 className="history">View suppression history</h5>
        </div>
        <div className="Processing">
            <ProcessingQue />
            
        </div>
       
      </div>
    );
  }
}
export default SuppresionList
