import React, { useState } from 'react';


export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onSubmit=(evento)=>{
        evento.preventDefault();  
        // setCategories((e)=>
        //     {[...e,value]}
        // );
        if (inputValue.trim().length >= 1)
        {
            onAddCategory(inputValue.trim());
            setInputValue('');
        }
        

    }
  return (
    <form onSubmit={onSubmit}>
         <input type='text' placeholder='Nombre del Gif a buscar, presione ENTER para buscar' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}></input>
    </form>
     )
}
