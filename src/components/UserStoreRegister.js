import { extendObservable } from 'mobx';


/**
 * This is the login from the Steam clone...
 */

 class UserStoreRegister{
    constructor(){
        extendObservable(this,  {
            
            loading: true,  
            isRegistered: false,
            name: ''


        })
    }
 }

 export default new UserStoreRegister();