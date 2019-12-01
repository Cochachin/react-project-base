import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './CardsComponent.scss';
import { CardsProps } from '../../props/CardsProps';

export class CardsComponent extends Component<CardsProps, {}>{
    render(){
        return(
            <div className="mol-cards" onClick={(e) =>{this.props.onClick(this.props.restaurant, e)}}>
                <div className="mol-cards--boxtext">
                    <div className="cmp-cards-text">
                        <p>{this.props.restaurant.name}</p>
                    </div>
                    <div className="cmp-cards-star">
                        <p>
                            <span>{this.props.restaurant.ranking}</span>
                            {this.props.restaurant.starts.map(item=>
                                <FontAwesomeIcon key={item} icon={faStar}/>
                            )}
                        </p>
                    </div>
                    <div className="cmp-cards-address">
                        <p>Comentario positivo ( {this.props.restaurant.comment_positive} )</p>
                        <p>Comentario negativo ( {this.props.restaurant.comment_negative} )</p>    
                        <p>{this.props.restaurant.region + ", " + this.props.restaurant.district + ", " + this.props.restaurant.address}</p>
                        <p>{this.props.restaurant.openClose}</p>
                    </div>
                </div>
                <div className="mol-cards--image">
                    <img className="atm-image" src="/img/temp.jpg" />
                </div>
            </div>
        )
    }
}