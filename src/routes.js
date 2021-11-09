import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

function ProtectedRoutes(props) {
    const { token } = useContext(AuthContext);

    return (
        <Route render={() => (token ? props.children : <Redirect to="/" />)} />
    )
}

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={LandingPage} />
                <ProtectedRoutes>
                    <Route path="/" component={ } />
                </ProtectedRoutes>
            </Switch>
        </Router>
    )
}

export default Routes;