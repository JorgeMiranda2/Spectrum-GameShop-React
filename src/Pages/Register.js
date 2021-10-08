import React from 'react';
import { observer } from 'mobx-react';
import Nav from '../components/Nav';
import UserStoreRegister from '../components/UserStoreRegister';
import LoginFormRegister from '../components/ModuleRegister/LoginFormRegister';  
import '../css/Register.css';

class Register extends React.Component{

  async componentDidMount(){

    try{

      let res  = await  fetch('/isRegistered', {

        method: 'post',
        headers: { 
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }

    });

      let result = await res.json();
      if(result && result.success){
        UserStoreRegister.loading = false;
        UserStoreRegister.isLoggedIn = true;
        UserStoreRegister.username = result.username;
      }
      else{
        UserStoreRegister.loading = false;
        UserStoreRegister.isLoggedIn = false;
      }

    }

    catch(e){
      UserStoreRegister.loading = false;
      UserStoreRegister.isRegistered = false;
    }

  } 


  render(){ 
    if(UserStoreRegister.loading){
      return(
        <div className = "register">
            <div className = "container-re">
                Loading, please wait...
            </div>
        </div>
      );
    }
    else{
      if(UserStoreRegister.isRegistered){
        return(
          <div className = "register">
              <div className = "container-re">
                  Welcome {UserStoreRegister.name}
              </div>
          </div>
        );
      }

      return (
        <div className="register">
              <Nav/>
            <div className = 'container-re'>
              <LoginFormRegister />  
            </div> 
        </div>
      );

    }

  }
  
}
export default observer(Register);