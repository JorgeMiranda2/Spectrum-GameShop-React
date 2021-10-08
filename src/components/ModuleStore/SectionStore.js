import React from 'react';
import '../../css/ModuleStore/SectionStore.css';
import {BrowserRouter as Router, Switch, Redirect, Link,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import S1 from './SectionStoreModule1';
import S2 from './SectionStoreModule2';
import S3 from './SectionStoreModule3';

const SectionStore = ({showingData, setShowingData})=> {

  

    return ( 
    
        <Router>
           
<div className='Container'>
    
<div className='Section-nav'>
    <NavLink exact strict to='/store/1'  className='a1' activeStyle={{background:'#1F3140'}} >CO-OP</NavLink>
    <NavLink to='/store/2'className='a2' href='mod' activeStyle={{background:'#1F3140'}} >SURVIVAL HORROR</NavLink>
    <NavLink to='/store/3' className='a2' activeStyle={{background:'#1F3140'}} >ACTION-ADVENTURE</NavLink>
    
</div>
<div className='Section-body'>
    
   
<Route  path='/store/1' exact strict render={()=>(<S1 showingData={showingData} setShowingData={setShowingData}/>)}></Route>
<Route  path='/store/2' render={()=>(<S2 showingData={showingData} setShowingData={setShowingData}/>)}></Route>
<Route  path='/store/3' render={()=>(<S3 showingData={showingData} setShowingData={setShowingData}/>)}></Route>
     
    
</div>

</div>
</Router>
     );
    
}
 
export default SectionStore;