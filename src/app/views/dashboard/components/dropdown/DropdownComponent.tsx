import React, { Component } from 'react';
import './DropdownComponent.scss';
import { DropdownProps } from '../../props/DropdownProps';

export class DropdownComponent extends Component<DropdownProps, {}>{
    render(){
        return(
            <div className="cmp-dropdown">
                <div className="cmp-dropdown--profile">
                    <div className="user-profile">
                        <span>{this.props.person.getFirstLetterName()}</span>
                    </div>
                </div>
                <div className="cmp-dropdown--space">
                    <p>{this.props.person.fullName + " " + this.props.person.sureName}</p>
                </div>
                <div className="cmp-dropdown--space">
                    <p>{this.props.person.email}</p>
                </div>
                <div className="cmp-dropdown--button">
                    <button className="atm-button atm-button-large" onClick={this.props.dropdownClick}>Salir</button>
                </div>
            </div>
        )
    }

}