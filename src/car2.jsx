import React, { useState } from 'react';

export const Car2=()=>{
    const [company,setCompany]= useState("no company");
    const  changeMode2=(event)=>{
        const value= event.target.value;
        setCompany(value);
    }

    return(
        <>
    <p>     
    my car= {company}
  </p>
  

            <h3>component controlled by react ( by assigning the value directly). will be affected by reset</h3>
   <input type="text" onChange={changeMode2} value = {company} />


            <h3>component uncontrolled by react ( no assigning the value directly). won't be affected by reset</h3>

            <input type ="text" onChange={changeMode2} />

            <button onClick={() => setCompany("")}>איפוס</button>


        </>)
}