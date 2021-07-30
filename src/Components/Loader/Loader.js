import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

function LoaderOfImages () {
    return (
       <Loader
       type="Rings"
       color="#00BFFF"
       height={80}
       width={80}
       /> 
    );
}

export default LoaderOfImages;