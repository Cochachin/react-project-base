import { RouteComponentProps } from 'react-router-dom';
import { Person } from '../../model/entity/Person';

export interface RoorProps extends RouteComponentProps{
    subscribe: any,
    search: any,
    subscribe_person: any,
    user_profile: any,
    subscribe_comment: any,
    comment: any,
    select_restaurant: any,
    register_comment: any,
    register_replay_comment: any
}