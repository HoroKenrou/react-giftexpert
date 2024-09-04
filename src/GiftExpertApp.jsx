import { useState } from "react"
import {AddCategory, GiftGrid} from './components';

 
export const GiftExpertApp = ()=>{

    const [categories, setCategories] = useState(['Spice and Wolf']);
    
    const onAddCategory = (newCategory) =>{

        if (categories.includes(newCategory)) return;

        setCategories([newCategory,...categories])

    } 

    const onDeleteCategory = (categoryToRemove)=>{
        setCategories(categories.filter(category => category != categoryToRemove))
    }

    return (
        <>
            {/*  Titulo */}
            <h1>Gift Expert App</h1>

            {/*  Input */}
            <AddCategory 
                onNewCategory = {value => onAddCategory(value)}
            />
            {/*  Listado de gifts */}
            {
                categories.map( (category) => (
                    
                        <GiftGrid 
                            key={category} 
                            category={category}
                            onDeleteCategory={onDeleteCategory}
                        />
                    
                ))
            }
        </>
    )
}
