import React, { Component } from 'react';
import { InputSearchComponent } from '../../../shared/components/input/InputSearchComponent';
import { CardsComponent } from '../cards/CardsComponent';
import { RestaurantState } from '../../state/RestaurantState';
import { RestaurantProps } from '../../props/RestaurantProps';

export class RestaurantComponent extends Component<RestaurantProps, RestaurantState>{    
    constructor(props: any){
        super(props);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.state={
            response: false,
            loader : true,
            message : "",
            list: []
        }
    }

    render(){
        return(
            <div className="nav_content">
                <div className="nav-container">
                    <div className="nav_content--boxtext">
                        <h1 className="nav_content--text">Gastón compara tú restaurante</h1>
                    </div>
                    <div className="nav_content--boxinputsearch">
                        <div>
                            <InputSearchComponent onChange={this.onChangeSearch}/>
                        </div>
                    </div>
                </div>
                <div className="nav-container-list">
                    <div className="nav-container-list--scroll">
                        {this.state.list.map((item) =>
                            <div key={item.key}>
                                <CardsComponent restaurant={item}/>
                                <div className="atm-line"></div>
                            </div>    
                        )}
                    </div>
                </div>
            </div>
        )
    }

    public componentDidMount():void {
        this.props.search("").then((resp: any) =>{
            this.setState(this.props.subscribe);
        }).catch((error: any) =>{
            console.log(error);
        });
    }

    public onChangeSearch(event: any):void{
        let temp = event.target.value;
        this.props.search(temp).then((resp: any) =>{
            this.setState(this.props.subscribe);
        }).catch((error: any) =>{
            console.log(error);
        });
    }
}