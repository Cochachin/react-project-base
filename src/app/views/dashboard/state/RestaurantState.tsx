import { Base } from '../../state/Base';
import { Restaurant } from '../../../model/entity/Restaurant';

export interface RestaurantState extends Base{
    list: Array<Restaurant>
}