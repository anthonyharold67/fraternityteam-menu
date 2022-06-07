import { createContext,useState } from "react";
import items from  "../data/data"

export const MenuContext = createContext()

const MenuContextProvider = (props) =>{
    const allCategories = ["all"]
    items.map(item=>allCategories.indexOf(item.category)=== -1 ?allCategories.push(item.category):null )
    // const allCategories = ['all', ...new Set(items.map(item => item.category))];
    const [categories,setCategories]= useState(allCategories)
    const [menu,setMenu]=useState(items)

    const menuFilter = (param) =>{
        if(param === "all" ){
            setMenu(items)
            // return
        }else{
            const newItems = items.filter((item)=>item.category === param)
            setMenu(newItems)

        }
    }
    return(
        <MenuContext.Provider value={{menu,categories,menuFilter}}>
            {props.children}
        </MenuContext.Provider> 
    )

}

export default MenuContextProvider;
