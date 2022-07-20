import {useState} from 'react'
import { AddCategory, GifGrid } from './components'


export const GifExpertApp = () => {

const [categoria, setCategoria] = useState(['Los Simpsons'])


const onAddCategory = (oneNewCategory) => {

    if( categoria.includes(oneNewCategory)) return;
  
setCategoria([ oneNewCategory, ...categoria])
}



  return (
    <>
 
    <h1>GifExpertApp</h1>


    <AddCategory 
    oneNewCategory={onAddCategory} />



        {
        categoria.map((category) => (
            <GifGrid
            key={category}
            category={category}/>
                )
        )}

    </>
  )
}
