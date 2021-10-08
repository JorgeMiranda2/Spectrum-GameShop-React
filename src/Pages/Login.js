import React from 'react';
import { observer } from 'mobx-react';
import Nav from '../components/Nav';
import UserStore from '../components/UserStore';
import LoginForm from '../components/ModuleLogin/LoginForm';  
import SubmitButton from '../components/ModuleLogin/SubmitButton';
import '../css/Login.css';

class Login extends React.Component{

  async componentDidMount(){

    try{

      let res  = await  fetch('/isLoggedIn', {

        method: 'post',
        headers: { 
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }

    });

      let result = await res.json();
      if(result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }

    }

    catch(e){
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }

  } 


  async doLogOut(){

    try{

      let res  = await  fetch('/logout', {
        
        method: 'post',
        headers: { 
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }

      });

      let result = await res.json();

      if(result && result.success){
        
        UserStore.isLoggedIn = false;
        UserStore.username = '';
        
      }
    }
    catch(e){
      UserStore.isLoggedIn = false;
      UserStore.username = '';
    }

  } 

  render(){ 
    if(UserStore.loading){
      return(
        <div className = "login">
            <div className = "container">
                Loading, please wait...
            </div>
        </div>
      );
    }
    else{
      if(UserStore.isLoggedIn){
        return(
          <div className = "login">
              <div className = "container">
                  Welcome {UserStore.username}

                  <SubmitButton
                      text = {'Log out'}
                      disabled = {false}
                      onClick = { () => this.doLogOut() }
                  />

              </div>
          </div>
        );
      }

      return (
        <div className="login">
            <Nav/>
            <div className = 'container'>
            <LoginForm />  
            </div> 
        </div>
      );

    }

  }
  
}
export default observer(Login);