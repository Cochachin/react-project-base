import React, { Component } from 'react';
import { ModalProps } from '../props/ModalProps';
import { InputComponent } from '../../shared/components/input/InputComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './RegisterComponent.scss';
import { ModalState } from '../states/ModalState';
import { RegisterUserRequest } from '../../../model/dto/RegisterUserRequest';
import { FormEmailValid } from '../../helpers/FormEmailValid';

export class RegisterComponent extends Component<ModalProps, ModalState>{
    constructor(props: ModalProps){
        super(props);
        this.state = {
            loader: true,
            response: false,
            message: "",
            emailValid: true,
            passwordValid: true,
            fullnamesValid: true,
            surnamesValid: true,
            phoneValid: true,
            email: "",
            fullnames: "",
            surnames: "",
            password: "",
            phone: ""
        }
        this.emailOnChance = this.emailOnChance.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
        this.fullnamesOnChange = this.fullnamesOnChange.bind(this);
        this.surnamesOnChane = this.fullnamesOnChange.bind(this);
        this.phoneOnChange = this.phoneOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <form className="cmp-register" onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="cmp-register--names">
                        <div className="cmp-register--names--item">
                            <label>
                                <InputComponent 
                                    type="text" 
                                    place="Nombres"
                                    name="fullnames"
                                    onChange={this.fullnamesOnChange}
                                    invalid={this.state.fullnamesValid}
                                    />    
                            </label>
                        </div>
                        <div  className="space"></div>
                        <div className="cmp-register--names--item">
                            <label>
                                <InputComponent 
                                    type="text" 
                                    place="Apellidos"
                                    name="surnames"
                                    invalid={this.state.surnamesValid}
                                    onChange={this.surnamesOnChane}/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            <InputComponent 
                                type="text"
                                place="Email"
                                name="email"
                                invalid={this.state.emailValid}
                                onChange={this.emailOnChance}
                            />
                        </label>
                    </div>
                    <div className="cmp-register--password">
                        <label>
                            <InputComponent 
                                type="text"
                                place="Numero telefónico"
                                name="phone"
                                invalid={this.state.phoneValid}
                                onChange={this.phoneOnChange}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <InputComponent 
                                type="password" 
                                place="Contraseña"
                                name="password"
                                invalid={this.state.passwordValid}
                                onChange={this.passwordOnChange}
                                />
                        </label>
                    </div>
                    <div className="cmp-register--button">
                        <button type="submit" className="atm-button atm-button-green">{this.state.loader ? 'Registar': 'Cargando...'}</button>
                    </div>
                    <div className="text-message">
                        { this.state.message }
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

    public emailOnChance(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state: ModalState, props:ModalProps) =>{
            state.email = value;
            state = FormEmailValid.validateInputEmail(name, value, state);
            return state;
        });
    }

    public passwordOnChange(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        let temp = FormEmailValid.validFieldPassword(name, value, this.state);
        this.setState(temp);
    }

    public surnamesOnChane(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        let temp = FormEmailValid.validateInputText(name, value, this.state);
        this.setState(temp);
    }

    public fullnamesOnChange(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        let temp = FormEmailValid.validateInputText(name, value, this.state);
        this.setState(temp);
    }

    public phoneOnChange(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        let temp = FormEmailValid.validateInputNumber(name, value, this.state);
        this.setState(temp);
    }

    public handleSubmit(event:any):void{
        event.preventDefault();
        if(this.validForm(this.state)){
            let request = new RegisterUserRequest(this.state);
            this.setState({loader: false});
            console.log(this.props)
            this.props.registerPost(request).then(() =>{
                this.setState(this.props.subscribe)
                if(this.state.response)
                    this.props.closeModal();
                else
                    this.setState(this.props.subscribe);
            }).catch((error: any) =>{
                console.log(error);
            });
        }
    }

    public validForm(state: ModalState):boolean{
        let response = false;
        if(this.state.email.length <= 0)
            this.setState({emailValid: false})
        
        if(this.state.password.length <= 0)
            this.setState({passwordValid: false})
        
        if(this.state.fullnames.length <= 0)
            this.setState({fullnamesValid: false})
        
        if(this.state.surnames.length <= 0)
            this.setState({surnamesValid: false})
        
        if(this.state.phone.length <= 0)
            this.setState({phoneValid: false})
        
        if(
            state.emailValid && 
            state.passwordValid && 
            state.fullnamesValid &&state.phoneValid && state.surnamesValid)
            response = true;
        
        return response;
    }
}