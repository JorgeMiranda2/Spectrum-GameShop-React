import React from 'react';
import SMI from './SectionModuleImage';
import image1 from '../../images/StoreImages/coop/img-game-1.jpg';
import image2 from '../../images/StoreImages/coop/img-game-2.jpg';
import image3 from '../../images/StoreImages/coop/img-game-3.jpg';
import image4 from '../../images/StoreImages/coop/img-game-4.jpg';
import image5 from '../../images/StoreImages/coop/img-game-5.jpg';
import image6 from '../../images/StoreImages/coop/img-game-6.jpg';
import '../../css/ModuleStore/SectionStoreModules.css';
import reactRouterDom from 'react-router-dom';



const SectionStoreModule1 = ({showingData, setShowingData})=>{
    
    return (
      
        <div className='Container-Module'>
             
            <SMI src={image1} url='
            The Blackout Club is a first-person co-op horror game centered around 
            a group of teenage friends investigating a monstrous secret beneath the skin of their small town. 
            1-4 players explore procedurally-generated missions against a fearsome enemy you can only see with your eyes closed.
            'price='10' showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image2} url='The critically acclaimed RPG that raised the bar, from the creators of Baldurs Gate 3. Gather your party. 
            Master deep, tactical combat. Venture as a party of up to four - but know that only 
            one of you will have the chance to become a God.
            'price='20'showingData={showingData} setShowingData={setShowingData} />


            <SMI src={image3} url='
            No remarkable journey is achieved without great effort. Outward is an open-world RPG where the 
            cold of the night or an infected wound can be as dangerous as a predator lurking in the dark. 
            Explore the vast world of Aurai, embark on memorable adventures alone or with your friend.
            'price='30'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image4} url='
            The Ultimate Vault Hunter’s Upgrade lets you get the most out of the Borderlands 2 experience.
            'price='40'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image5} url='
            Garrys Mod is a physics sandbox. There arent any predefined aims or goals. We give you the tools and leave you to play.
            'price='50'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image6} url='
            Sea of Thieves offers the essential pirate experience, from sailing and fighting to exploring and looting 
            – everything you need to live the pirate life and become a legend in your own right. 
            With no set roles, you have complete freedom to approach the world, and other players, however you choose.
            'price='60'showingData={showingData} setShowingData={setShowingData}/>
            
        </div>
     );
    
}
 
export default SectionStoreModule1;