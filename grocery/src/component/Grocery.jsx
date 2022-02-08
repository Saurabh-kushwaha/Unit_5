import React, { useState } from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';


function Grocery() {

    const [item, setItem] = useState([]);
     
    const onDeleteItem = (itemToDelete) => {
        const newItemList = item.filter((item) => item.id !== itemToDelete.id)
        setItem(newItemList);
    }

    return (
        <div>
            <GroceryInput item = {item} setItem= {setItem} />
            <div>
            <ul>
                {
                    item.map((item) =>
                        <GroceryList key={item.id} item={item} onDeleteItem={onDeleteItem}/>
                    )
                }
                </ul>
            </div>    
        </div>
    );
}
export default Grocery;
