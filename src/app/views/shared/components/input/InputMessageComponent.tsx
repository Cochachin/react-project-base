import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'

export  class InputMessageComponent extends Component{

    render(){
        return(
            <div className="input-text-area">
                <textarea className="atm-input-message" placeholder="Ingresar un comentario"/>
                <FontAwesomeIcon className="icon-search icon-search-area" icon={faSmile} />
            </div>
        )
    }

}