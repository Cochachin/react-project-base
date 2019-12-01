import React, { Component } from 'react';
import './HeaderComponent.scss';
import { DropdownComponent } from '../dropdown/DropdownComponent';
import { HeaderState } from '../../state/HeaderState';
import { HeaderProps } from '../../props/HeaderProps';
import { Person } from '../../../../model/entity/Person';
import { Restaurant } from '../../../../model/entity/Restaurant';

export class HeaderComponent extends Component<HeaderProps, HeaderState>{
    constructor(props: any){
        super(props);
        this.state = {
            dropdown: false,
            person: new Person(),
            letter: "",
            restaurant: new Restaurant()
        }
        this.dropdownOnClick = this.dropdownOnClick.bind(this);
        this.dropdownOpenClick = this.dropdownOpenClick.bind(this);
    }
    render(){
        const { subscribe } = this.props
        const { restaurant } = subscribe;
        return(
            <div className="cmp-header">
                <div className="cmp-header--text">
                    <p>{ restaurant.name }</p>
                </div>
                <div className="cmp-header--profile user-profile" onClick={this.dropdownOpenClick}>
                    <span>{this.state.letter}</span>
                </div>
                { this.state.dropdown && <DropdownComponent person={ this.state.person } dropdownClick={this.dropdownOnClick}/> }
            </div>
        )
    }

    public dropdownOnClick(event: any):void{
        this.setState({ dropdown: false });
        this.props.history.push("/login");
    }

    public dropdownOpenClick(event: any): void{
        this.setState({ dropdown: !this.state.dropdown });
    }

    public componentDidMount():void {
        this.props.user_profile().then((resp:any) =>{
            this.setState(this.props.subscribe_person);
        }).catch((error: any) =>{
            console.log(error);
        });
    }
}