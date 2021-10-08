import React from 'react';
import  '../../css/ModuleLibrary/Aside.css';
import image3 from '../../images/img-game-3.jpg';
import image4 from '../../images/img-game-4.jpg';
import image5 from '../../images/img-game-5.jpg';
import image6 from '../../images/img-game-6.jpg';

const Aside = () => {
    return (  
<div className='aside'>
	<form><input type="text" placeholder='Search for tittle' className='search' name=""/></form>
	<div className='container-aside'>
		<img  className='img-aside ola' src={image3}/>
		<a className='name-aside' href="#">GTA: San Andreas</a>
	</div>
	<div className='container-aside'>
		<img className='img-aside' src={image4}/>
		<a className='name-aside' href="#">Death Strading</a>
	</div>
	<div className='container-aside'>
		<img className='img-aside' src={image5}/>
		<a className='name-aside' href="#">Rocket League</a>
	</div>
	<div className='container-aside'>
		<img className='img-aside' src={image6}/>
		<a className='name-aside' href="#">PayDay II</a>
	</div>

</div>


    );
}
 
export default Aside;