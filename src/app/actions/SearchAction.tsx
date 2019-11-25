import { ConstantAction } from './ConstantAction';
import { BaseAction } from './BaseAction';
import { SearchService } from '../store/datasource/remote/SearchService';

export class SearchAction extends BaseAction{
    public static async searchRestaurant(dispatch: any, search: string){
        try{
            let service = new SearchService();
            let resp = await service.searchRestaurant(search);
            if(this.checkResponse(resp)){
                return dispatch({
                    type: ConstantAction.SEARCH_RESTAURANT,
                    payload: resp.data
                });
            }
            else{
                return dispatch({
                    type: ConstantAction.REQUEST_ERROR,
                    payload: "Lo siento el servicio esta en mantenimiento"
                });
            }
        }
        catch(error){
            return dispatch({
                type: ConstantAction.REQUEST_ERROR,
                payload: "Lo siento el servicio esta en mantenimiento"
            })
        }
        
    }
}