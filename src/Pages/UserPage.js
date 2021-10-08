import React from 'react';
import Nav2 from '../components/Nav2';
import UserPageForm from '../components/ModuleUserPage/UserPageForm';
import '../css/UserPage.css';

function UserPage() {
    return(
        <div className="UserPage">
           <Nav2/>
           <UserPageForm/>
        </div>
    );
}

export default UserPage;