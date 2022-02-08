import React from 'react';
import styles from './Grocery.module.css'

function GroceryList({ item, onDeleteItem }) {

    return (
        <li className={styles.ListItem}>
            <>
               <span>
                {item.value}
                </span>
            </>
            <button className={styles.delete_btn} onClick={() => onDeleteItem(item)}>Delete</button>
        </li>
    )
}

export default GroceryList;
