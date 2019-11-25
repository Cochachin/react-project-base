import React, { Component } from 'react';
import './HeaderComponent.scss';
import { DropdownComponent } from '../dropdown/DropdownComponent';
import { HeaderState } from '../../state/HeaderState';
import { HeaderProps } from '../../props/HeaderProps';

export class HeaderComponent extends Component<HeaderProps, HeaderState>{
    constructor(props: any){
        super(props);
        this.state = {
            dropdown: false
        }
        this.dropdownOnClick = this.dropdownOnClick.bind(this);
        this.dropdownOpenClick = this.dropdownOpenClick.bind(this);
    }
    render(){
        return(
            <div className="cmp-header">
                <div className="cmp-header--text">
                    <p>Pollería Rustica</p>
                </div>
                <div className="cmp-header--profile user-profile" onClick={this.dropdownOpenClick}>
                    <span>F</span>
                </div>
                { this.state.dropdown && <DropdownComponent dropdownClick={this.dropdownOnClick}/> }
            </div>
        )
    }

    public dropdownOnClick(event: any):void{
        this.setState({ dropdown: false });
        this.props.history.push("/login");
    }

    public dropdownOpenClick(event: any): void{
        this.setState({ dropdown: true });
    }
}