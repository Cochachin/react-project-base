import React, { Component } from 'react';
import { ModalProps } from '../props/ModalProps';
import { InputComponent } from '../../shared/components/input/InputComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './RegisterComponent.scss';

export class RegisterComponent extends Component<ModalProps>{
    constructor(props: ModalProps){
        super(props);
    }
    render(){
        return(
            <div className="cmp-register-modal">
                <div className="cmp-register-modal--header">
                    <div>
                        <h1>Registrate</h1>
                        <span>Es rápido y facil</span>
                    </div>
                    <span onClick={this.props.closeModal} className="cmp-register-modal--header--close">
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </span>
                </div>
                <form className="cmp-register" onSubmit={this.handleSubmit}>
                    <div className="cmp-register--names">
                        <div className="cmp-register--names--item">
                            <label>
                                <InputComponent 
                                    type="text" 
                                    place="Nombres"
                                    name=""
                                    onChange=""
                                    invalid={false}
                                    />    
                            </label>
                        </div>
                        <div  className="space"></div>
                        <div className="cmp-register--names--item">
                            <label>
                                <InputComponent 
                                    type="text" 
                                    place="Apellidos"
                                    name=""
                                    invalid={false}
                                    onChange=""/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            <InputComponent 
                                type="text"
                                place="Email"
                                name=""
                                invalid={false}
                                onChange=""
                            />
                        </label>
                    </div>
                    <div className="cmp-register--password">
                        <label>
                            <InputComponent 
                                type="password" 
                                place="Contraseña"
                                name=""
                                invalid={false}
                                onChange=""
                                />
                        </label>
                    </div>
                    <div className="cmp-register--button">
                        <button type="submit" className="atm-button atm-button-green">Registrate</button>
                    </div>
                </form>
                <div className="cmp-register-modal--term">
                    <p>
                        Al hacer clic en Registrarte, aceptas las Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS que podrás desactivar cuando quieras.
                    </p>
                </div>
            </div>
        );
    }

    public handleSubmit(event:any):void{
        console.log(event);
    }
}