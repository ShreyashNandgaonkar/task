import React from 'react';
import { Dropdown, DropdownButton, Item} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Suppression.css';
import 'semantic-ui-css/semantic.min.css';

function Modal() {
            return (
            <div className="Modal">
            <DropdownButton id="dropdown-basic-button" title="List Actions">
                    <Dropdown.Item id="ddown" href="#/action-1"><i class="envelope open icon"></i> Create Suppression List</Dropdown.Item>
                    <Dropdown.Item id="ddown" href="#/action-2"><i class="envelope outline icon"></i> Add Suppression Email</Dropdown.Item>
                    <Dropdown.Item id="ddown" href="#/action-3"><i class="archive icon"></i> Remove Suppression Email</Dropdown.Item>
            </DropdownButton>
            </div>
            );
          }
export default Modal
