import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import CustomersUse from './components/pages/customersUse'
import CustomerSelections from './components/pages/customerSelections'


const RouteLinks = () => {
    return (
        <Router>
            <Switch >
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/customersuse" >
                    <CustomersUse />
                </Route>
                <Route parh='/customerselections' >
                    <CustomerSelections />
                </Route>

            </Switch>

        </Router>
    )
}

export default RouteLinks;