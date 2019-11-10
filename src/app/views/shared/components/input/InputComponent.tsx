import React, { Component } from 'react';
import { InputProps } from '../../props/InputProps';

export class InputComponent extends Component<InputProps>{
    render(){
        return(
            <div>
                <input className="atm-input atm-input-radius" type={this.props.type} placeholder={this.props.place}/>
            </div>
        )
    }
}