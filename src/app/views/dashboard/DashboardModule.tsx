import React, { Component } from 'react';
import { RestaurantComponent } from './components/restaurant/RestaurantComponent';
import { InputMessageComponent } from '../shared/components/input/InputMessageComponent';
import { ComentsComponent } from './components/coments/ComentsComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { withRouter } from 'react-router-dom';
import { RoorProps } from '../props/RootProps';
import { connect } from 'react-redux';
import { SearchAction } from '../../actions/SearchAction';

export class DashBoardModule extends Component<RoorProps, {}>{
    render(){
        return(
            <main className="content-dash">
                <div className="content-dash--nav">
                    <RestaurantComponent search={this.props.search} subscribe={this.props.subscribe}/>
                </div>
                <div className="content-dash--view">
                    <div className="content-dash--view--center">
                        <div className="content-dash--view--center--item_1">
                            <HeaderComponent history={this.props.history}/>
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
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state: any) =>{
    return{
        subscribe: state.SearchReducer
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        search: async(search: string) =>{
            await SearchAction.searchRestaurant(dispatch, search);
        }
    }
}



const DashBoardModuleNav = withRouter(connect(mapStateToProps, mapDispatchToProps)(DashBoardModule) as any);

export default DashBoardModuleNav;