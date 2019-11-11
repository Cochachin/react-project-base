import React, { Component } from 'react';
import { ErrorProps } from '../../props/ErrorProps';

export class ErrorComponent extends Component<ErrorProps>{
    render(){
        if(!this.props.flag){
            return(
                <div className="mol-error">{this.props.message}</div>
            );
        }
        else
            return null;
    }
}