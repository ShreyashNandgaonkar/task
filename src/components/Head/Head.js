import React from 'react';
import './Head.css';
import 'semantic-ui-css/semantic.min.css';

function Head(props) {
    return (
        <div className="Mainheading">
            <p className="left-heading">
            Infogenie
            </p> 
            <p className="headingRight">
            <i class="angle double down icon"></i>Manage
            </p>
        </div>
    )
}

export default Head
