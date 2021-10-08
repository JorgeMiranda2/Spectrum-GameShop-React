import React from 'react';
import SMI from './SectionModuleImage';
import image1 from '../../images/StoreImages/sh/img-game-1.jpg';
import image2 from '../../images/StoreImages/sh/img-game-2.jpg';
import image3 from '../../images/StoreImages/sh/img-game-3.jpg';
import image4 from '../../images/StoreImages/sh/img-game-4.jpg';
import image5 from '../../images/StoreImages/sh/img-game-5.jpg';
import image6 from '../../images/StoreImages/sh/img-game-6.jpg';
import '../../css/ModuleStore/SectionStoreModules.css';


const SectionStoreModule2 = ({showingData, setShowingData})=>{
    
    return (
      
        <div className='Container-Module'>
             
            <SMI src={image1} url='
            Hell is an experiment you cant survive in Outlast, a first-person survival horror game developed 
            by veterans of some of the biggest game franchises in history. As investigative journalist Miles Upshur, 
            explore Mount Massive Asylum and try to survive long enough to discover its terrible secret... if you 
            'price='10' showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image2} url='
            Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. 
            To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis! Also includes Resident Evil Resistance, 
            a new 1 vs 4 online multiplayer game set in the Resident Evil universe.
            'price='20'showingData={showingData} setShowingData={setShowingData} />


            <SMI src={image3} url='
            For some time now, Leafmore High School has been the setting for unexplained disappearances. In this survival horror game, 
            you take control of a group of 5 American students. With your friends, you try to unravel the mysterious happenings at this 
            unremarkable-looking school. The night will be lon
            'price='30'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image4} url='
            Fahrenheit (known as Indigo Prophecy in North America) was a breakthrough in interactive narrative. 
            This newly remastered edition features updated textures in HD, expanded controller support, and is based on the 
            uncut and uncensored international version of the game.
            'price='40'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image5} url='
            Amnesia: The Dark Descent, a first person survival horror. A game about immersion, discovery and living through a nightmare. 
            An experience that will chill you to the core.
            'price='50'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image6} url='
            The Park is a first-person psychological horror adventure game developed and published by Funcom. 
            The game was released for Microsoft Windows via Steam on October 27, 2015 
            'price='60'showingData={showingData} setShowingData={setShowingData}/>


            
        </div>
     );
    
}
 
export default SectionStoreModule2;