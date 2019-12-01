export interface InputProps{
    type: string,
    place: string,
    name: string,
    onChange: any,
    invalid: boolean
}

export interface InputChangeProps{
    onChangeInput?: any,
    name: string,
    placeholder: string
}