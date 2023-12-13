import React from 'react';
import {personalInfo} from '../data';

const Info = () => {
  return (
    <>
     {personalInfo.map(({title,description},index)=>{
        return(
            <li className='info__item' key ={index}>
                <span className='info__title'>{title}</span>
                <spam className='info__description'>{description}</spam>

            </li>
        );
     })}
    </>
  );
};

export default Info
