import  { useState } from 'react'

export const AddCategory = ({oneNewCategory}) => {


    const [inputValue, setInputValue] = useState('')

const onInputChange = ({target}) => {
//console.log(target.value)
setInputValue(target.value)
}

const onSubmit =  ( event ) => {
    event.preventDefault()
    if(inputValue.trim().length <= 1) return;

    console.log(inputValue)
    //Category( categoria => [inputValue, ...categoria ])
    setInputValue('')
    oneNewCategory(inputValue.trim())
}

  return (
    <form onSubmit={ onSubmit }>
        <input type='text' 
            placeholder='Buscar GIF'
            value={inputValue}
            onChange={( onInputChange)}
        ></input>
    </form>
    
 )}
