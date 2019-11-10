import React, { Component } from 'react';
import { ModalProps } from '../props/ModalProps';
import { InputComponent } from '../../shared/components/input/InputComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './RegisterComponent.scss';

export class RegisterComponent extends Component<ModalProps>{

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
                <form className="cmp-register">
                    <div className="cmp-register--names">
                        <div className="cmp-register--names--item">
                            <label>
                                <InputComponent type="text" place="Nombres"/>
                            </label>
                        </div>
                        <div  className="space"></div>
                        <div className="cmp-register--names--item">
                            <label>
                                <InputComponent type="text" place="Apellidos"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            <InputComponent type="text" place="Email"/>
                        </label>
                    </div>
                    <div className="cmp-register--password">
                        <label>
                            <InputComponent type="password" place="Contraseña"/>
                        </label>
                    </div>
                    <div className="cmp-register--button">
                        <button className="atm-button atm-button-green">Registrate</button>
                    </div>
                </form>
                <div className="cmp-register-modal--term">
                    <p>
                        Al hacer clic en Registrarte, aceptas las Condiciones, la Política de datos y la Política de cookies. Es posible que te enviemos notificaciones por SMS que podrás desactivar cuando quieras.
                    </p>
                </div>
            </div>
        )
    }
}