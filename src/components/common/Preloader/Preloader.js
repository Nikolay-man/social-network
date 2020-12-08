import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} 
            alt="description"
        />
    </div>
}

export default Preloader;