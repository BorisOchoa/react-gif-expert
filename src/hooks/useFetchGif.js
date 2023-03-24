import React, { useEffect, useState } from 'react'
import getGif from '../helpers/GetGif';

export const useFetchGif = (category) => {
    const [images,setImages]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    const getImages=async()=>{

        
        const im=  await getGif(category);
        setImages(im);
        setIsLoading(false);
    };

    useEffect(()=>{ 
        getImages();
    
    },[])

  return (
    {
        images: images,
        isLoading: isLoading
      
    }
  )

  
}
