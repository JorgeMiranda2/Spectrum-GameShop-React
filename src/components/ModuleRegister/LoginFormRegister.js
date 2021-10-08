import React from 'react';
import SpectrumLogo from '../../images/SpectrumLogo.png';
import UserStoreRegister from '../UserStoreRegister';
import InputFieldRegister from './InputFieldRegister';
import SubmitButtonRegister from './SubmitButtonRegister';



class LoginFormRegister extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        name: '',     
        email: '', 
        username: '',
        password: '',
        buttonDisabled: false
    }
  }

  setInputValue(property, val){
     val = val.trim();
     if(val.length > 40){
       return;
     }

     this.setState({

        [property]: val

     })

  }

  resetForm(){
    this.setState({
        name: '',
        email: '',
        username: '',
        password:'',
        buttonDisabled:false
    })
  }

  async doRegister(){
    this.setState({
        buttonDisabled: true
    })

      try{
          let res = await fetch('/register',{
          
          method: 'post',
          headers: {

            'Accept': 'application/json',
            'Content-Type': 'application/json'

          },

          body: JSON.stringify({
            
            name: this.state.name,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password

          })

        });

          let result = await res.json();
          if(result && result.success){
            UserStoreRegister.isRegistered = true;
            UserStoreRegister.name = result.name;
          }
          else if(result && result.success === false){
            this.resetForm();
            alert(result.msg);
          }
      }
      catch(e){
          console.log(e);
          this.resetForm();
      }
  }


  render(){ 
  return (

        
        <div className="loginFormRegister">

            <div className = "logo-re">
              <img src = {SpectrumLogo} alt="Steam logo" height='150px' width='150px' />
            </div>
            

            <div className="title-re">
              Create a free account.
            </div>

            <InputFieldRegister
              type = 'text'
              placeholder = 'Full name'
              value={this.state.name ? this.state.name : ''}
              onChange = {(val) => this.setInputValue('name', val)}
            />

            <InputFieldRegister
              type = 'text'
              placeholder = 'e-mail'
              value={this.state.email ? this.state.email : ''}
              onChange = {(val) => this.setInputValue('email', val)}
            />

            <InputFieldRegister
              type = 'text'
              placeholder = 'Username'
              value={this.state.username ? this.state.username : ''}
              onChange = {(val) => this.setInputValue('username', val)}
            />

            <InputFieldRegister
              type = 'password'
              placeholder = 'Password'
              value={this.state.password ? this.state.password : ''}
              onChange = {(val) => this.setInputValue('password', val)}
            />

            <SubmitButtonRegister
              text = 'Register now'
              disabled = {this.state.buttonDisabled}
              onClick = {() => this.doRegister()}
            />

        </div>
  );

  }
  
}
export default LoginFormRegister;
