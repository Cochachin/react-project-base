import { RouteComponentProps } from 'react-router-dom';

export interface LoginProps{
    
}

export interface LoginComponentProps extends RouteComponentProps<any> {
    loginPost: any,
    subscribe: any,
    subscribe_register: any,
    registerPost: any
    /* other props for ChildComponent */
}