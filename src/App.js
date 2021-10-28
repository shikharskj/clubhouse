import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation'
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Route path={[
        '/',
        '/invite',
        '/get_username',
        '/code_confirm',
        '/allow_notification',
      ]}>
        <PlanLayout>
          <Switch>
              <Route exact path="/" >
                  <Welcome />
              </Route>
              <Route exact path="/invite" >
                  <PhoneConfirmation />
              </Route>
              <Route exact path="/code_confirm" >
                  <CodeConfirm />
              </Route>
              <Route exact path="/allow_notification" >
                  <AllowNotification />
              </Route>
          </Switch>
        </PlanLayout>
      </Route>
      <Route exact path={['/home', '/explore', '/profile']}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" >
              <Home />
            </Route>  
            <Route exact path="/explore" >
              <Explore />
            </Route>  
            <Route exact path="/profile" >
              <Profile />
            </Route>  
          </Switch>
        </AppLayout>
      </Route>
    </Router>
    
  );
}
export default App;
