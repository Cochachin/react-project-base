import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputSearchProps } from '../../props/InputSearchProps';

export class InputSearchComponent extends Component<InputSearchProps,{}>{
    render(){
        return(
            <div className="content-input-search">
                <input className="atm-input-search" onChange={(e)=>this.props.onChange(e)}/>
                <FontAwesomeIcon className="icon-search" icon={faSearch} />
            </div>
        )
    }   
}