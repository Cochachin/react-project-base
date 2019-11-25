import { Base } from '../../state/Base'; 

export interface ModalState extends Base{
    email:string,
    fullnames: string,
    password: string,
    surnames: string,
    phone: string,
    emailValid: boolean,
    passwordValid: boolean,
    fullnamesValid: boolean,
    surnamesValid: boolean,
    phoneValid: boolean 
}