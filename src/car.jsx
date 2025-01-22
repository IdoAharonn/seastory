import React, { useState } from 'react';

export const Car=()=>{
    const [company,setCompany]= useState("no company");
    const  changeModel=(event)=>{
        const value= event.target.value;
        setCompany(value);
    }

    return(
        <>
        <h3>car 1</h3>
    <p>     
    my car= {company}
  </p>
  

            <h3>component controlled by react ( by assigning the value directly). will be affected by reset</h3>
            <input type="text" onChange={changeModel} value = {company} />


            <h3>component uncontrolled by react ( no assigning the value directly). won't be affected by reset</h3>

            <input type ="text" onChange={changeModel} />

            <button onClick={() => setCompany("")}>איפוס</button>


            


        </>)
}
