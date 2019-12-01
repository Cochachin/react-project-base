import { ConstantAction } from './ConstantAction';
import { BaseAction } from './BaseAction';
import { SearchService } from '../store/datasource/remote/SearchService';
import { Restaurant } from '../model/entity/Restaurant';

export class SearchAction extends BaseAction{
    public static async searchRestaurant(dispatch: any, search=""){
        try{
            let service = new SearchService();
            let resp = await service.searchRestaurant(search);
            if(this.checkResponse(resp)){
                if(search.length > 0){
                    return dispatch({
                        type: ConstantAction.SEARCH_RESTAURANT,
                        payload: resp.data
                    });
                }
                else{
                    return dispatch({
                        type: ConstantAction.LIST_RESTAURANT,
                        payload: resp.data
                    });
                }
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

    public static async selectRestaurant(dispatch: any, restaurant: Restaurant){
        try{
            return dispatch({
                type: ConstantAction.SELECT_RESTAURANT,
                payload: restaurant
            });
        }
        catch(error){
            return dispatch({
                type: ConstantAction.REQUEST_ERROR,
                payload: "Lo siento el servicio esta en mantenimiento"
            })
        }
        
    }
}