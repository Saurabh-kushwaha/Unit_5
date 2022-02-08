import  { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Grocery.module.css'

function GroceryInput({ item, setItem }) {
   const [value, setValue] = useState("");
    return (
        <div>
            <h1 className={styles.h1}>Grocery Item List</h1>
            <div>
                <input className={styles.input}
                   type="text"
                    value={value}
                    placeholder = "Add Items ........"
                   onChange={(el) => setValue(el.currentTarget.value)}
                />
                <button className={styles.add}
                    onClick={() => {
                        if (value) {
                            setItem([...item,
                            {
                                value,
                                id: uuidv4(),
                            },
                            ])
                            //  console.log(item)
                            setValue("")
                        } else {
                            console.log("enterValue")
                        }
                   }}
                >Add</button>
               
            </div>
        </div>
    );
}

export default GroceryInput;
