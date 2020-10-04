import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import TargetList from './TargetList';
import SuppresionList from './SuppresionList';
import './Navbar.css';
import 'semantic-ui-css/semantic.min.css';


function Navbar() {
    return (
        <div className="Router">
        <Router >
        <Route path = "/" component = {TargetList} exact></Route>
        <NavLink activeStyle={{  borderBottom:'2.5px solid rgb(65, 146, 206)' }} className="Route" to="/" exact><i class="arrow alternate circle up outline icon"></i>Target List </NavLink>
        <Route path = "/suppresionList" component = {SuppresionList} ></Route>
        <NavLink activeStyle={{ borderBottom:'2.5px solid rgb(65, 146, 206)'}} className="Route" to="/suppresionList"><i class="id card outline icon"></i>Suppression List </NavLink>    
        </Router>
        </div>
    )
}

export default Navbar
