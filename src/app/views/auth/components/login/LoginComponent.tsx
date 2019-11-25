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
import { connect } from 'react-redux';
import { LoginRequest } from '../../../../model/dto/LoginRequest';
import { LoginAction } from '../../../../actions/LoginAction';
import { RegisterUserAction } from '../../../../actions/RegisterUserAction';
import { RegisterUserRequest } from '../../../../model/dto/RegisterUserRequest';

class LoginComponent extends Component<LoginComponentProps, LoginState>{
    constructor(props: LoginComponentProps){
        super(props);
        this.state = {
            showModal: false,
            email: '',
            password: '',
            emailValid: true,
            passwordValid: true,
            formValid: true,
            loader: true,
            message: "",
            response: false
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
                <form onSubmit={this.handleLogin} autoComplete="off">
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
                        <button className="atm-button atm-button-large">
                            {this.state.loader ? 'Entrar': 'Cargando...'}
                        </button>
                    </div>
                </form>
                <div>
                    <p className="mol-error mol-error-container">{this.state.message}</p>
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
                    <RegisterComponent closeModal={this.handleCloseModal} subscribe={this.props.subscribe_register} registerPost={this.props.registerPost}/>
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
        let request = new LoginRequest();
        request.password = this.state.password;
        request.email = this.state.email;
        if(this.validEmailPassword(this.state)){
            this.setState({loader: false});
            this.props.loginPost(request).then(() =>{
                this.setState(this.props.subscribe)
                if(this.state.response)
                    this.props.history.push("/dash");
                else
                    this.setState(this.props.subscribe);
    
            }).catch((error: any) =>{
                console.log(error);
            });
        }
    }

    public emailOnChance(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        let temp = FormEmailValid.validateInputEmail(name, value, this.state);
        this.setState(temp);
    }

    public passwordOnChange(event: any):void{
        const name = event.target.name;
        const value = event.target.value;
        let temp = FormEmailValid.validFieldPassword(name, value, this.state);
        this.setState(temp);
    }

    public validEmailPassword(state: LoginState):boolean{
        let response = false;
        if(this.state.email.length <= 0)
            this.setState({emailValid: false})
        
        if(this.state.password.length <= 0)
            this.setState({passwordValid: false})

        if(state.emailValid && state.passwordValid)
            response = true;

        return response;
    }

    public componentWillMount():void {
        ReactModal.setAppElement('body');
    }

}

const mapStateToProps = (state: any) =>{
    return{
        subscribe: state.LoginReducer,
        subscribe_register: state.RegisterReducer
    }
}

const mapDispatchToProps = (dispatch:any) =>{
    return{
        loginPost: async(request: LoginRequest) =>{
            await LoginAction.auth(dispatch, request);
        },
        registerPost: async(request: RegisterUserRequest) =>{
            await RegisterUserAction.register(dispatch, request);
        }
    }
}


const LoginComponentNav = withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginComponent) as any);

export default LoginComponentNav;