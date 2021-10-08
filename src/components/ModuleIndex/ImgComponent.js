import React from 'react';

function ImgComponent({ src }){

    let ImgStyles={
        width:100+"%",
        height:100+"%"
    }

    return <img src={src} alt="This is a game" style={ImgStyles}></img>
}


export default ImgComponent;