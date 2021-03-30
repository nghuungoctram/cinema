import Menu from './Menu/Menu'
import Conten1 from '../Before-login/Content1/Conten1'
import Conten2 from '../Before-login/Conten2/Conten2'
import Conten3 from '../Before-login/Conten3/Conten3'
import Conten4 from '../Before-login/Conten4/Conten4'
import ContenBottom from "../Before-login/ContenBottom/ContenBottom";
import Login from '../Before-login/Login/Login'
import HomePage from '../Home-page/HomePage'
import Registration from '../Before-login/Registration/Registration'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Beforelogin() {
    return (

        <Router>
            <Switch>
                <Route exact path='/'>
                    <Menu />
                    <Conten1 />
                    <Conten2 />
                    <Conten3 />
                    < Conten4 />
                    <ContenBottom />

                </Route>
                <Route path='/login'>
                    <Login />
                    <ContenBottom />
                </Route>
                <Router path='/home'>
                    <HomePage />
                </Router>
                <Route path='/registration'>
                    < Registration />
                    <ContenBottom />
                </Route>
            </Switch>
        </Router >
    )
}

export default Beforelogin
