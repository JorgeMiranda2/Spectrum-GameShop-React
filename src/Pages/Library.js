import React from 'react';
import '../css/Library.css';
import Nav2 from '../components/Nav2';
import Aside from '../components/ModuleLibrary/Aside';
import Sections from '../components/ModuleLibrary/Sections';


function Library(){
    return ( 
    <div className="Library">
        <Nav2/>
        <Aside/>
        <Sections/>
    </div>
     );
}
 
 
export default Library;