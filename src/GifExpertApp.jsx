import React, { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const onAddCategory=(newCategory)=>{
        let catmin=categories.toString().toLowerCase();
        const newCatmin=newCategory.toLowerCase();
        

        if (catmin.includes(newCatmin)) return;
        setCategories((cat)=>[newCategory,...cat] );
                }
 
  return (
    <>
    <h1>Buscador de Gif</h1>
   <AddCategory onAddCategory={onAddCategory}  />
       {categories.map((cat)=>
  (
    <GifGrid category={cat} key={cat}/>
  )
     
     )}
    </>
  )
}
 