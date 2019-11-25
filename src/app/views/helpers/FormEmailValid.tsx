export class FormEmailValid{

    public static validateInputText(fieldName: any, value: any, state: any):any{
        let onlyTextValid = (value.match(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/)) ? true:false;
        state[`${fieldName}`] = value;
        state[`${fieldName}Valid`] = onlyTextValid;
        return state;
    }

    public static validateInputEmail(fieldName: any, value: any, state: any):any{
        let emailValid = (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? true:false;
        state[`${fieldName}`] = value;
        state[`${fieldName}Valid`] = emailValid;
        return state;
    }

    public static validFieldPassword(fieldName: any, value: any, state: any):any{
        let passwordValid = false;
        if(value.length > 0)
            passwordValid = true;
        
        state[`${fieldName}`] = value;
        state[`${fieldName}Valid`] = passwordValid;

        return state;
    }

    public static validateInputNumber(fieldName: any, value: any, state: any):any{
        let emailValid = (value.match(/^[0-9]+$/)) ? true:false;
        state[`${fieldName}`] = value;
        state[`${fieldName}Valid`] = emailValid;
        return state;
    }
}
