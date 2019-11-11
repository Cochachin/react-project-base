import React, { Component } from 'react';
import { InputProps } from '../../props/InputProps';

export class InputComponent extends Component<InputProps>{
    render(){
        return(
            <div>
                <input className={`atm-input atm-input-radius ${!this.props.invalid ? 'mol-error-border' : ''}`} 
                    type={this.props.type} 
                    placeholder={this.props.place}
                    name={this.props.name}
                    onChange={(e)=>this.props.onChange(e)}/>
            </div>
        )
    }
}