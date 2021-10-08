import React from 'react';
import './App.css'
import Login from './Pages/Login';
import Register from './Pages/Register';
import Index from './Pages/Index';
import Library from './Pages/Library';
import Store from './Pages/Store';
import UserPage from './Pages/UserPage';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


function App() {

    return(
    
        
      <Router>
        <Switch>
         <Route path="/login" component={Login}/>
         <Route path="/register" component={Register}/>
         <Route path="/library" component={Library}/>
         <Route exact strict path="/store/1" component={Store}/>
         <Route path="/userPage" component={UserPage}/>
         <Route path="/index" component={Index}/>
        <Redirect exact from = "/" to="/index"/>
        </Switch>
      </Router>
   
    );
}

export default App;
