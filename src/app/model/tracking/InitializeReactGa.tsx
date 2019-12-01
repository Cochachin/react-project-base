import ReactGA from 'react-ga';
import { Constant } from '../constant/Constant';

export class InitializeReactGa{
    public static initialize(){
        ReactGA.initialize(Constant.GOOGLE_ANALYTICS);
        //ReactGA.pageview("/login")
    }
}