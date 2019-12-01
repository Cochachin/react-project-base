import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile } from '@fortawesome/free-solid-svg-icons'
import { InputChangeProps } from '../../props/InputProps';

export  class InputMessageComponent extends Component<InputChangeProps,{}>{

    render(){
        return(
            <div className="input-text-area">
                <textarea className="atm-input-message" placeholder={this.props.placeholder}
                name={this.props.name}
                onKeyDown={(e)=>this.props.onChangeInput(e)}/>
                <FontAwesomeIcon className="icon-search icon-search-area" icon={faSmile} />
            </div>
        )
    }

}