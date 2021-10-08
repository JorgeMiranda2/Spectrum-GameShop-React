
import React from 'react';
import  '../../css/ModuleLibrary/Sections.css';
import image1 from '../../images/img-game-1.jpg';
import image2 from '../../images/img-game-2.jpg';
import image3 from '../../images/img-game-3.jpg';
import image4 from '../../images/img-game-4.jpg';
import image5 from '../../images/img-game-5.jpg';
import image6 from '../../images/img-game-6.jpg';
import image7 from '../../images/arrow.png';

const Sections = () => {
    return ( 
        <div className='B'>

	<div className='section1'>
		<p className='p1'>WHAT'S NEW</p>
		<div className='hr'>
			<hr/>	
		</div>
		<div className='container-s1'>
			<div className='img-container-s1'>
				<img src={image1} width="100%" height="100%" />
			</div>
			<a className='tittle-container-s1'>Rocket League: New vehicles available</a>
				
			
		</div>
		<div className='container-s1'>
			<div className='img-container-s1'>
				<img src={image2} width="100%" height="100%" />
			</div>
			<a className='tittle-container-s1'>PAYDAY II: New playable character</a>
				

		</div>
		<div className='container-s1'>
			<a id='label-section-1' >Come back soon...</a>
		</div>

	</div>
	<div className='section2'>
		<div className='container-p2'>
			<p className='p2'>RECENT GAMES</p>
		</div>
		<div className='imgIcon'>
			<img className='imgS'src={image7}/>
		</div>
		<div className='hr'>
			<hr/>
		</div>

		<div className='container-s2'>
			
				<img src={image3} width="100%" height="100%" />		
			
		</div>
		<div className='container-s2-1'>
			<img src={image4} width="100%" height="100%" />	
		</div>
		<div className='container-s2-1'>
			<img src={image5} width="100%" height="100%" />	
		</div>
		<div className='container-s2-1'>
			<img src={image6} width="100%" height="100%" />	
		</div>


		<div className='container-p2'>
			<p className='p2'>ALL GAMES</p>
		</div>
		<div className='imgIcon'>
			<img className='imgS'src={image7}/>
		</div>
		<div className='hr'>
			<hr/>
		</div>
		


	</div>






	</div>
     );
}
 
export default Sections;