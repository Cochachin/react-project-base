import React, { Component } from 'react';
import { RestaurantComponent } from './components/restaurant/RestaurantComponent';
import { InputMessageComponent } from '../shared/components/input/InputMessageComponent';
import { ComentsComponent } from './components/coments/ComentsComponent';

export class DashBoardModule extends Component{
    render(){
        return(
            <main className="content-dash">
                <div className="content-dash--nav">
                    <RestaurantComponent/>
                </div>
                <div className="content-dash--view">
                    <div className="content-dash--view--center">
                        <div className="content-dash--view--center--item_1">
                            <span>Hola mundo</span>
                        </div>
                        <div className="content-dash--view--center--item_2">
                            <div className="content-list-coment">
                                <ComentsComponent />
                                <div className="atm-line-space"></div>
                                <ComentsComponent />
                                <div className="atm-line-space"></div>
                                <ComentsComponent />
                                <div className="atm-line-space"></div>
                                <ComentsComponent />
                            </div>
                            <div className="content-list-message">
                                <InputMessageComponent/>
                            </div>
                        </div>
                    </div>
                    <div className="content-dash--view--right">
                        <span>Hola mundo</span>
                    </div>
                </div>
            </main>
        )
    }
}