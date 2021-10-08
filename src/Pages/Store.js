import React, {useState} from 'react';
import Nav2 from '../components/Nav2';
import image1 from '../images/StoreImages/coop/img-game-1.jpg';
import SectionStore from '../components/ModuleStore/SectionStore';
import AsideStore from '../components/ModuleStore/AsideStore';
const Store = () => {
    const [showingData, setShowingData] = useState({img: image1, url:'The Blackout Club is a first-person co-op horror game centered around a group of teenage friends investigating a monstrous secret beneath the skin of their small town. 1-4 players explore procedurally-generated missions against a fearsome enemy you can only see with your eyes closed', price:'$10'});
   
    return ( 
        <div width='100%'  style={{background:"#211843", height:'625px' }}>
            
            <Nav2/>
            <SectionStore showingData={showingData} setShowingData={setShowingData}/>
            <AsideStore showingData={showingData} setShowingData={setShowingData}/>

        </div>

     );
}
 
export default Store;







