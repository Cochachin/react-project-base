import React, { Component } from 'react';
import { RestaurantComponent } from './components/restaurant/RestaurantComponent';

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
                            <span>Hola mundo</span>
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