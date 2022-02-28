import React, { useState }  from 'react';

export const Checkbox = () => {

    const [checked, setChecked] = useState(false)
    const [done, setDone] = useState(false)

    const handleCheckboxChange = () => {
        
        setChecked(!checked)

        if(checked !== true){
            setDone("Done")
        } else {
            setDone("Not done")
        }
}

    return(
        <label>
            <input type="checkbox" className="filled-in" onChange={handleCheckboxChange}/>
            <span>{done}</span>
        </label>
    )
}

