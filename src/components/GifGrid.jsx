import getGif from "../helpers/GetGif";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif.js";

export const GifGrid = ( {category}) => {

  const {images,isLoading}=useFetchGif(category);
    
  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<div>Cargando</div>)
        }
        <div className="card-grid">
        {images.map((image)=>(<GifItem key={image.id} {...image} />))}
        </div>
    </>

  )
}
