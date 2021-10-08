import React from 'react';
import SMI from './SectionModuleImage';
import image1 from '../../images/StoreImages/aad/img-game-1.jpg';
import image2 from '../../images/StoreImages/aad/img-game-2.jpg';
import image3 from '../../images/StoreImages/aad/img-game-3.jpg';
import image4 from '../../images/StoreImages/aad/img-game-4.jpg';
import image5 from '../../images/StoreImages/aad/img-game-5.jpg';
import image6 from '../../images/StoreImages/aad/img-game-6.jpg';
import '../../css/ModuleStore/SectionStoreModules.css';


const SectionStoreModule3 = ({showingData, setShowingData})=>{
    
    return (
      
        <div className='Container-Module'>
             
            <SMI src={image1} url='
            Experience Aloy’s legendary quest to unravel the mysteries of a future Earth ruled by Machines. 
            Use devastating tactical attacks against 
            your prey and explore a majestic open world in this award-winning action RPG!
            'price='10' showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image2} url='
            The world is a vast, beautiful and dangerous place – especially when you have been shrunk to the size of an ant. 
            Can you thrive alongside the hordes of giant insects, fighting to survive the perils of the backyard?
            ' price='20'showingData={showingData} setShowingData={setShowingData} />


            <SMI src={image3} url='
            Over-the-top combat with combos and hard-hitting morph attacks • Wild, varied gameplay sequences for all types of gamers • 
            Hand-drawn animation feels like playing a cartoon • Drop-in couch co-op for three players
            ' price='30'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image4} url='
            Become Samurai Jack, the greatest warrior across time. 
            Journey through time to finally stop Aku’s evil 
            reign in this new adventure told by the creators of Samurai Jack.
            'price='40'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image5} url='
            Named Game of the Year 2019 by Giant Bomb, Polygon, Eurogamer, and The Guardian, Outer Wilds is a critically-acclaimed
             and award-winning open world mystery about a solar system trapped in an endless time loop.
            ' price='50'showingData={showingData} setShowingData={setShowingData}/>


            <SMI src={image6} url='
            Firewatch is a single-player first-person mystery set in the Wyoming wilderness, 
            where your only emotional lifeline is the person on the other end of a handheld radio.
            'price='60'showingData={showingData} setShowingData={setShowingData}/>
            
        </div>
     );
    
}
 
export default SectionStoreModule3;