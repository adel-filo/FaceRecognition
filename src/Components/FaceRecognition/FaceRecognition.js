import React from 'react';

const FaceRecognition = ({imageUrl}) =>{
    return(
        <div className='center'>
        <img alt='' width='500px' height='auto' src={imageUrl}>

        </img>
           
        </div>
    )
}
export default FaceRecognition;