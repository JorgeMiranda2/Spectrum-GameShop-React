import React from 'react';
import '../../css/ModuleStore/SectionStoreModules.css';


const SectionModuleImage = ({showingData, setShowingData, src, url, price}) => {

    function sendData(Img, Url, Price){
        setShowingData({...showingData, img:Img , url:Url, price:'$'+Price});
    }
    return ( 
        
        <div className='Img-Container'>        
            <img src={src} width='100%' height='100%' onClick={()=> sendData(src, url ,price)}/>
        </div>  

     );
}
 
export default SectionModuleImage;