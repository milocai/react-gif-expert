import { useState } from 'react'
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {
  
    const [ categories, setCategories ] = useState([ 'Charles Lecrerc' ])
    //console.log(categories);


    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
    <>
        {/* titulo */}
        <h1>Gif Expert App</h1>

        {/* Input */}
        <AddCategory
            //setCategories={ setCategories }
            onNewCategory={ onAddCategory }
        />

        {/* Listado de GIFs */}

        {
            categories.map( (category) => (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))
        } 
            {/* GIF item */}
    </>
  )
}
