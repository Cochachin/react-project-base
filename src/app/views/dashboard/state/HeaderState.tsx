import { Person } from "../../../model/entity/Person";
import { Restaurant } from '../../../model/entity/Restaurant';

export interface HeaderState{
    dropdown: boolean,
    person: Person,
    letter: any,
    restaurant: Restaurant
}