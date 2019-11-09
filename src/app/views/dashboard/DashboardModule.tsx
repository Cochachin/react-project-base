import React, { Component } from 'react';
import { RestaurantComponent } from './components/restaurant/RestaurantComponent';

export class DashBoardModule extends Component{
    render(){
        return(
            <main className="content-dash">
                <div className="content-dash--nav">
                    <RestaurantComponent/>
                </div>
                <div>
                    <span>Hola mundo</span>
                </div>
            </main>
        )
    }
}