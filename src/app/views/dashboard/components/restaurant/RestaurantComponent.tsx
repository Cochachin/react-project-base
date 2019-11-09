import React, { Component } from 'react';
import { InputSearchComponent } from '../../../shared/components/input/InputSearchComponent';
import { CardsComponent } from '../cards/CardsComponent';

export class RestaurantComponent extends Component{
    render(){
        return(
            <div className="nav_content">
                <div className="nav-container">
                    <div className="nav_content--boxtext">
                        <h1 className="nav_content--text">Restaurante Perú</h1>
                    </div>
                    <div className="nav_content--boxinputsearch">
                        <div>
                            <InputSearchComponent />
                        </div>
                    </div>
                </div>
                <div className="nav-container-list">
                    <div className="nav-container-list--scroll">
                        <CardsComponent/>
                        <div className="atm-line"></div>
                        <CardsComponent/>
                        <div className="atm-line"></div>
                        <CardsComponent/>
                        <div className="atm-line"></div>
                        <CardsComponent/>
                    </div>
                </div>
            </div>
        )
    }
}