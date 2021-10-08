import React, {useState} from 'react';  
import '../../css/ModuleIndex/Carousel.scss';
import ImgComponent from './ImgComponent';
import i1 from './ImagesCarousel/Borderlands-3.jpg';
import i2 from './ImagesCarousel/Fall-Guys.jpg';
import i3 from './ImagesCarousel/Death-stranding.jpg';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

function Carousel(){

    let carouselArr = [<ImgComponent src={i1}/>,< ImgComponent src={i2} />,< ImgComponent src={i3} />];

    const[x, setX]= useState(0);

    const goLeft = () => {
        x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x+100);
    };
    const goRight = () => {
        x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x-100);
    };


    return (
        <div className="carousel">
            {
                carouselArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })}

                <ArrowLeft id="goLeft" onClick={goLeft}>
                    <i class="fas fa-arrow-left"></i>
                </ArrowLeft>
                <ArrowRight id="goRight" onClick={goRight}>
                    <i class="fas fa-arrow-right"></i>
                </ArrowRight>

        </div>
     );
}
 
export default Carousel;
