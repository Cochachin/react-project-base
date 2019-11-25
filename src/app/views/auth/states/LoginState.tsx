import { Base } from '../../state/Base';

export interface LoginState extends Base{
    showModal: boolean,
    email: string,
    password: string,
    emailValid: boolean,
    passwordValid: boolean,
    formValid: boolean,
    loader:boolean,
    message: string
}

