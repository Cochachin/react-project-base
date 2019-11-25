import React, { Component } from 'react';
import './DropdownComponent.scss';
import { DropdownProps } from '../../props/DropdownProps';

export class DropdownComponent extends Component<DropdownProps>{
    render(){
        return(
            <div className="cmp-dropdown">
                <div className="cmp-dropdown--profile">
                    <div className="user-profile">
                        <span>F</span>
                    </div>
                </div>
                <div className="cmp-dropdown--space">
                    <p>Florian Valentin Cochachin Mallqui</p>
                </div>
                <div className="cmp-dropdown--space">
                    <p>efnj1235@gmail.com</p>
                </div>
                <div className="cmp-dropdown--button">
                    <button className="atm-button atm-button-large" onClick={this.props.dropdownClick}>Salir</button>
                </div>
            </div>
        )
    }

}