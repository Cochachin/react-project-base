export class FormEmailValid{
    public static validateField(fieldName: any, value: any, state: any):any{
        let fieldValidationErrors = state.formError;
        let emailValid = state.emailValid;
        emailValid = (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? true:false;
        fieldValidationErrors.email = (emailValid) ? 'is invalid' : '';
        state.formError = fieldValidationErrors;
        state.emailValid = emailValid;
        return state;
    }

    public static validFieldPassword(fieldName: any, value: any, state: any):any{
        let fieldValidationErrors = state.formError;
        let passwordValid = state.passordValid;
        console.log(value)
        if(value.length > 0)
            passwordValid = true;
        else
            passwordValid = false;
        
        fieldValidationErrors.password = (passwordValid) ? 'is invalid' : '';
        state.formError = fieldValidationErrors;
        state.passwordValid = passwordValid;
        return state;
    }
}