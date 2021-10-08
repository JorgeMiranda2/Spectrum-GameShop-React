import React from 'react';
import {useHistory} from 'react-router-dom';
import SubmitButton from '../ModuleUserPage/SubmitButtonUserPage';
import SpectrumLogo from '../../images/SpectrumLogo.png';

const UserPage = () => {
  
  const history = useHistory();

  const doLogOut = () => {
      history.push("/login");
  }

  return (

      <div className="container">

            <div className = "logo">
              <img src = {SpectrumLogo} alt="Steam logo" height='150px' width='150px' />
            </div>
            
            <div className="title">
              Welcome to your account.
            </div>

           <SubmitButton
              text = 'Logout'
              onClick={doLogOut}
            />

      </div>

  );
}
export default UserPage;
