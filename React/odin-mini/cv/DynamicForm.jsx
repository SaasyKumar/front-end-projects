import { useState } from "react";
export default function DynamicForm({state,input_details,callback}){
    console.log(state);
    const details = input_details;
    function updateFormData(id,ev){
        callback({...state,[id]:ev.target.value})
    };
    let form =[];
    form = details.map((item)=>{
        return <div key={item.id}><span>{item.content}</span><input type={item.type} id={item.id} onChange={updateFormData.bind(null,item.id) } value={state[item.id]}></input></div>
    })
    return(
        <>
        {form}
        </>
    )
}