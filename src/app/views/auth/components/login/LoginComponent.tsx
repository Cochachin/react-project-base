import React, { Component } from 'react';
import { InputComponent } from '../../../shared/components/input/InputComponent';
import './LoginComponet.scss';
import ReactModal  from 'react-modal';
import { LoginComponentProps } from '../../props/LoginProps';
import { LoginState } from '../../states/LoginState';
import { RegisterComponent } from '../../modals/RegisterComponent';
import { customStyles }  from '../../constant/CustumStyles';
import { withRouter } from 'react-router-dom';
import { FormEmailValid } from '../../../helpers/FormEmailValid';
import { ErrorComponent } from '../../../shared/components/error/ErrorComponent';

class LoginComponent extends Component<LoginComponentProps, LoginState>{
    constructor(props: LoginComponentProps){
        super(props);
        this.state = {
            showModal: false,
            email: '',
            password: '',
            formError: {
                email: '',
                password: ''
            },
            emailValid: true,
            passwordValid: true,
            formValid: true
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.emailOnChance = this.emailOnChance.bind(this);
        this.passwordOnChange = this.passwordOnChange.bind(this);
    }

    render(){
        return(
            <div className="cmp-login-from">
                <form onSubmit={this.handleLogin}>
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
                        <ErrorComponent flag={this.state.emailValid} message="Email inválido"/>
                    </div>
                    <div className="cmp-login-from--password">
                        <label>
                            <InputComponent 
                                type="password" 
                                place="Password"
                                name="password"
                                invalid={this.state.passwordValid}
                                onChange={this.passwordOnChange}
                            />
                        </label>
                        <ErrorComponent flag={this.state.passwordValid} message="Password inválido"/>                    
                    </div>
                    <div>
                        <button className="atm-button atm-button-large">Entrar</button>
                    </div>
                </form>
                <div>
                    <a>¿Has olvidado los datos de la cuenta?</a>
                </div>
                <div className="cmp-login-from--line">
                    <div className="atm-line-blue"></div>
                </div>
                <div className="cmp-login-from--acount">
                    <button className="atm-button atm-button-green" onClick={this.handleOpenModal}>Crear nueva cuenta</button>
                </div>
                <ReactModal 
                    isOpen={this.state.showModal}
                    style={customStyles}
                    contentLabel="Registrar usuario"
                >
                    <RegisterComponent closeModal={this.handleCloseModal}/>
                </ReactModal>
            </div>
        )
    }

    public handleOpenModal():void{
        this.setState((state:LoginState, prop: LoginComponentProps) =>{
            return{
                showModal: !state.showModal
            }
        })
    }

    public handleCloseModal():void{
        this.setState((state:LoginState, prop: LoginComponentProps) =>{
            return{
                showModal: !state.showModal
            }
        })
    }

    public handleLogin(event: any):void{
        event.preventDefault(); 
        this.props.history.push("/dash");
    }

    public emailOnChance(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state: LoginState, props:LoginComponentProps) =>{
            state.email = value;
            state = FormEmailValid.validateField(name, value, state);
            return state;
        })
    }

    public passwordOnChange(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        this.setState((state: LoginState, props:LoginComponentProps) =>{
            state.password = value;
            state = FormEmailValid.validFieldPassword(name, value, state);
            return state;
        })
    }

}

const LoginComponentNav = withRouter(LoginComponent as any);

export default LoginComponentNav;