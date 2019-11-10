import React, { Component } from 'react';
import './ComentsComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faThumbsUp, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { InputMessageComponent } from '../../../shared/components/input/InputMessageComponent';

export class ComentsComponent extends Component{
    render(){
        return(
            <div className="cmp-coment">
                <div>
                    <FontAwesomeIcon icon={faSmile} />
                </div>
                <p>Buena atencion, La comida muy bien servida con excelete sabor y a un precio promedio</p>
                <div className="cmp-coment--shared">
                    <div>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>Me gusta</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faShareAlt} />
                        <span>Compartir</span>
                    </div>
                    <div>
                        <InputMessageComponent/>
                    </div>
                </div>
            </div>
        )
    }
}