import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export class InputSearchComponent extends Component{
    render(){
        return(
            <div className="content-input-search">
                <input className="atm-input-search"/>
                <FontAwesomeIcon className="icon-search" icon={faSearch} />
            </div>
        )
    }   
}