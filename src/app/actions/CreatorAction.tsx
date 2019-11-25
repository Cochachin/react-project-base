import { ConstantAction } from './ConstantAction';

export class CreatorAction{
    public static action(type: string, playload: any):any{
        return{
            type: type,
            payload: playload
        }
    }
}