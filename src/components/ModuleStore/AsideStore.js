import React from 'react';
import '../../css/ModuleStore/AsideStore.css';
import image1 from '../../images/StoreImages/coop/img-game-1.jpg';
import SMI from '../ModuleStore/SectionModuleImage';

const AsideStore = ({showingData}) => {

   
   
       
    return ( 
        <div className='AsideShop'>

            <div id='Img-Aside-Container'>
                <img src={showingData.img} price={showingData.price} url={showingData.url} width='100%' height='100%'/>
            </div>
           <p id='Synopsis'>{showingData.url}</p>
           <p id='Price'>{showingData.price}</p>
            <button id='Btn-Buy'>Buy</button>
        </div>
      
     );
    
}
 
export default AsideStore;