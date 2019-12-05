import React, { Component } from 'react';
import './ComentsComponent.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { InputMessageComponent } from '../../../shared/components/input/InputMessageComponent';
import { CommentProps } from '../../props/CommentProps';
import { CommentReplayRequest } from '../../../../model/dto/CommentRequest';
import { Constant } from '../../../../model/constant/Constant';
import { Comment_replay } from '../../../../model/entity/Comment_replay';

export class ComentsComponent extends Component<CommentProps, {}>{
    constructor(props: any){
        super(props);
        this.onReplayComment = this.onReplayComment.bind(this);
    }
    render(){
        return(
            <div className="cmp-comment">
                <div className="cmp-comment--emoticon">
                    <div>
                        <div className="cmp-comment--emoticon--type">
                            <img className="atm-image" src={this.props.comment.getMotionIcon()}/>
                        </div>
                    </div>
                    <div className="cmp-comment--emoticon--profile">
                        <div className="cmp-comment--emoticon--profile--text">
                            <p>{ this.props.comment.person.fullName + "  " + this.props.comment.person.sureName }</p>
                            <p>{ this.props.comment.person.email }</p>
                        </div>
                        <div className="user-profile">
                            <span>{this.props.comment.person.getFirstLetterName()}</span>
                        </div>
                    </div>
                </div>
                <div className="cmp-comment--text">
                    <p>{this.props.comment.message}</p>
                </div>
                <div className="atm-line-black"></div>
                <div className="cmp-comment--shared">
                    <div>
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span>Me gusta</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faShareAlt} />
                        <span>Compartir</span>
                    </div>
                </div>
                <div className="cmp-comment--reponse">
                    { this.props.comment.comment_replay.map((item: Comment_replay) =>
                        <div className="cmp-comment--reponse--container" key={item.id}>
                            <div className="cmp-comment--reponse--profile">
                                <div className="user-profile user-profile-small">
                                    <span>{ item.user.getFirstLetterName() }</span>
                                </div>
                                <div className="user-text-response">
                                    <p>{ item.user.fullName + " " + item.user.sureName }</p>
                                    <p>{ item.user.email }</p>
                                </div>
                            </div>
                            <div className="cmp-comment--reponse--text">
                                <div>
                                    <p>{item.message}</p>
                                </div>
                            </div>
                        </div>   
                    )}
                </div>
                <div>
                    <InputMessageComponent placeholder="Responda este comentario" name="replayComment" onChangeInput={this.onReplayComment}/>
                </div>
            </div>
        )
    }

    public onReplayComment(event:any):void{
        let form:any = { }
        if(event.keyCode==Constant.KEYCODE_ENTER && event.shiftKey == false){
            event.preventDefault();
            if(event.target.value.length > 0){
                let request = new CommentReplayRequest();
                request.comment_id = this.props.comment.id;
                request.message = event.target.value;
                form[event.target.name] = event.target;
                //this.setState({textComment: ""});
                this.props.onChangeInput(request).then((resp: any) =>{
                    form["replayComment"].value = "";
                }).catch((error:any) =>{
                    console.log(error);
                });
            }
        }
        //this.props.onChangeInput(request) 
    }
}