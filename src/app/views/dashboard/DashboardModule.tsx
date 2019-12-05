import React, { Component } from 'react';
import { RestaurantComponent } from './components/restaurant/RestaurantComponent';
import { InputMessageComponent } from '../shared/components/input/InputMessageComponent';
import { ComentsComponent } from './components/coments/ComentsComponent';
import { HeaderComponent } from './components/header/HeaderComponent';
import { withRouter } from 'react-router-dom';
import { RoorProps } from '../props/RootProps';
import { connect } from 'react-redux';
import { SearchAction } from '../../actions/SearchAction';
import { UserAction } from '../../actions/UserAction';
import { CommentAction } from '../../actions/CommentAction';
import { Restaurant } from '../../model/entity/Restaurant';
import { RootState } from './state/RootState';
import { Constant } from '../../model/constant/Constant';
import { CommentRequest, CommentReplayRequest } from '../../model/dto/CommentRequest';

export class DashBoardModule extends Component<RoorProps, RootState>{
    constructor(props: RoorProps){
        super(props);

        this.state = {
            response: false,
            loader: false,
            message:"",
            textComment: ""
        }

        this.changeInputComment = this.changeInputComment.bind(this);    
        this.sendUserComment = this.sendUserComment.bind(this);
    }
    render(){
        const { comments } = this.props.subscribe_comment;
        return(
            <main className="content-dash">
                <div className="content-dash--nav">
                    <RestaurantComponent search={this.props.search} 
                                        subscribe={this.props.subscribe}
                                        comment={this.props.comment}
                                        subscribe_comment={this.props.subscribe_comment}
                                        select_restaurant={this.props.select_restaurant}/>
                </div>
                <div className="content-dash--view">
                    <div className="content-dash--view--center">
                        <div className="content-dash--view--center--item_1">
                            <HeaderComponent history={this.props.history} 
                                            subscribe_person={this.props.subscribe_person} 
                                            user_profile={this.props.user_profile}
                                            subscribe={this.props.subscribe}/>
                        </div>
                        <div className="content-dash--view--center--item_2">
                            <div className="content-list-coment">
                                { comments.list.length > 0 ? (comments.list.map((item: any)=>
                                    <div key={item.id}>
                                        <ComentsComponent onChangeInput={ this.props.register_replay_comment } comment={item}/>
                                        <div className="atm-line-space"></div>
                                    </div>    
                                )):(
                                    <div className="content-nofound">
                                        <h1>Lo siento no encontré comentarios</h1>
                                    </div>
                                )}
                            </div>
                            <div className="content-list-message">
                                <InputMessageComponent placeholder="Ingrese un comentario" name="userComment" onChangeInput={this.changeInputComment}/>
                            </div>
                        </div>
                    </div>
                    <div className="content-dash--view--right">
                    </div>
                </div>
            </main>
        )
    }

    public changeInputComment(event:any):void{
        let form:any = { }
        if(event.keyCode==Constant.KEYCODE_ENTER && event.shiftKey == false){
            event.preventDefault();
            if(this.state.textComment.length > 0){
                let request= new CommentRequest();
                const { restaurant } = this.props.subscribe;
                request.restaurant_id = restaurant.id;
                request.message = event.target.value
                form[event.target.name] = event.target;
                form["userComment"].value = "";
                this.setState({textComment: ""});
                this.sendUserComment(request);
            }
        }
        else
            this.setState({textComment: event.target.value})
    }

    public sendUserComment(request: CommentRequest):void{
        this.props.register_comment(request).then((resp: any) =>{
            console.log(this.props.subscribe_comment);
        }).catch((error: any) =>{
            console.log(error);
        });
    }
}

const mapStateToProps = (state: any) =>{
    return{
        subscribe: state.SearchReducer,
        subscribe_person: state.UserReducer,
        subscribe_comment: state.CommentReducer
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        search: async(search: string) =>{
            await SearchAction.searchRestaurant(dispatch, search);
        },
        select_restaurant:(restaurant: Restaurant) =>{
            SearchAction.selectRestaurant(dispatch, restaurant);
        },
        comment: async(search: string) =>{
            await CommentAction.getComment(dispatch, search);
        },
        user_profile:async() =>{
            await UserAction.getUser(dispatch);
        },
        register_comment: async(request: CommentRequest) =>{
            await CommentAction.registerComment(dispatch, request);
        },
        register_replay_comment: async(request: CommentReplayRequest) =>{
            await CommentAction.replayComment(dispatch, request);
        }
    }
}
const DashBoardModuleNav = withRouter(connect(mapStateToProps, mapDispatchToProps)(DashBoardModule) as any);
export default DashBoardModuleNav;