import React, { Component } from 'react';
import './ComentsComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { InputMessageComponent } from '../../../shared/components/input/InputMessageComponent';

export class ComentsComponent extends Component{
    render(){
        return(
            <div className="cmp-comment">
                <div className="cmp-comment--emoticon">
                    <div>
                        <div className="cmp-comment--emoticon--type">
                            <img className="atm-image" src="/img/happy.png"/>
                        </div>
                    </div>
                    <div className="cmp-comment--emoticon--profile">
                        <div className="cmp-comment--emoticon--profile--text">
                            <p>Florian Cochachin</p>
                            <p>efnj1235@gmail.com</p>
                        </div>
                        <div className="user-profile">
                            <span>A</span>
                        </div>
                    </div>
                </div>
                <div className="cmp-comment--text">
                    <p>Buena atencion, La comida muy bien servida con excelete sabor y a un precio promedio</p>
                </div>
                <div className="atm-line-black"></div>
                <div className="cmp-comment--shared">
                    <div>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>Me gusta</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faShareAlt} />
                        <span>Compartir</span>
                    </div>
                </div>
                <div className="cmp-comment--reponse">
                    <div className="cmp-comment--reponse--profile">
                        <div className="user-profile user-profile-small">
                            <span>F</span>
                        </div>
                        <div className="user-text-response">
                            <p>Florian Cochachin Mallqui</p>
                        </div>
                    </div>
                    <div className="cmp-comment--reponse--text">
                        <div>
                            <p>Esto es una respuesta de este momento es primera vez que se data Esto es una respuesta de este momento es primera vez que se data Esto es una respuesta de este momento es primera vez que se data Esto es una respuesta de este momento es primera vez que se data</p>
                        </div>
                    </div>
                </div>
                <div className="cmp-comment--reponse">
                    <div className="cmp-comment--reponse--profile">
                        <div className="user-profile user-profile-small">
                            <span>F</span>
                        </div>
                        <div className="user-text-response">
                            <p>Florian Cochachin Mallqui</p>
                        </div>
                    </div>
                    <div className="cmp-comment--reponse--text">
                        <div>
                            <p>Esto es una respuesta de este momento es primera vez que se data Esto es una respuesta de este momento es primera vez que se data Esto es una respuesta de este momento es primera vez que se data Esto es una respuesta de este momento es primera vez que se data</p>
                        </div>
                    </div>
                </div>
                <div>
                    <InputMessageComponent/>
                </div>
            </div>
        )
    }
}