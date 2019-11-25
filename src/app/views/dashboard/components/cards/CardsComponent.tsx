import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './CardsComponent.scss';
import { CardsProps } from '../../props/CardsProps';

export class CardsComponent extends Component<CardsProps, {}>{
    render(){
        return(
            <div className="mol-cards">
                <div className="mol-cards--boxtext">
                    <div className="cmp-cards-text">
                        <p>{this.props.restaurant.name}</p>
                    </div>
                    <div className="cmp-cards-star">
                        <p>
                            {this.props.restaurant.ranking}
                            {this.props.restaurant.starts.map(item=>
                                <FontAwesomeIcon key={item} icon={faStar}/>
                            )}
                        </p>
                    </div>
                    <div className="cmp-cards-address">
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