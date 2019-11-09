import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './CardsComponent.scss';

export class CardsComponent extends Component{
    render(){
        return(
            <div className="mol-cards">
                <div className="mol-cards--boxtext">
                    <div className="cmp-cards-text">
                        <p>Rustica</p>
                    </div>
                    <div className="cmp-cards-star">
                        <p>1 <FontAwesomeIcon icon={faStar}/></p>
                    </div>
                    <div className="cmp-cards-address">
                        <p>Restaurante - Av. La Marina 2631</p>
                        <p>Abierta hasta 4pm</p>
                    </div>
                </div>
                <div className="mol-cards--image">
                    <img className="atm-image" src="/img/temp.jpg" />
                </div>
            </div>
        )
    }
}