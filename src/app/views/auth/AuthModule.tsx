import React, { Component } from 'react';
import LoginComponentNav  from '../auth/components/login/LoginComponent';

export class AuthModule extends Component{
    render(){
        return(
            <div className="cmp-auth">
                <div className="cmp-auth--content">
                    <div className="cmp-auth--content--text">
                        <h1>Compara tú restaurante</h1>
                        <p>Inicio de sesión</p>
                    </div>
                    <div className="cmp-auth--content--login">
                        <LoginComponentNav />
                    </div>
                </div>
            </div>
        )
    }
}