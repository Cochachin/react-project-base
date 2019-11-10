import React, { Component } from 'react';
import { InputComponent } from '../../../shared/components/input/InputComponent';
import './LoginComponet.scss';
import ReactModal  from 'react-modal';
import { ChildComponentProps } from '../../props/LoginProps';
import { LoginState } from '../../states/LoginState';
import { RegisterComponent } from '../../modals/RegisterComponent';
import { customStyles }  from '../../constant/CustumStyles';
import { withRouter } from 'react-router-dom';


class LoginComponent extends Component<ChildComponentProps, LoginState>{
    
    constructor(props: ChildComponentProps){
        super(props);
        this.state = {
            showModal: false
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    render(){
        return(
            <div className="cmp-login-from">
                <form>
                    <div>
                        <label>
                            <InputComponent type="text" place="Email"/>
                        </label>
                    </div>
                    <div className="cmp-login-from--password">
                        <label>
                            <InputComponent type="password" place="Password"/>
                        </label>
                    </div>
                    <div>
                        <button className="atm-button atm-button-large" onClick={this.handleLogin}>Entrar</button>
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
        this.setState((state:LoginState, prop: ChildComponentProps) =>{
            return{
                showModal: !state.showModal
            }
        })
    }

    public handleCloseModal():void{
        this.setState((state:LoginState, prop: ChildComponentProps) =>{
            return{
                showModal: !state.showModal
            }
        })
    }

    public handleLogin(event: any):void{
        event.preventDefault(); 
        this.props.history.push("/dash");
    }

}

const LoginComponentNav = withRouter(LoginComponent as any);

export default LoginComponentNav;