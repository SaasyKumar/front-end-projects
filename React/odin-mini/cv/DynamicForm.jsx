import { useState } from "react";
export default function DynamicForm({state,input_details,callback}){
    console.log(state);
    const [,setFormData] = useState(state);
    var details = input_details;
    function updateFormData(id,ev){
        setFormData(prev=>{
            const obj = {
                ...prev,
                [id]:ev.target.value
            };
            callback(obj);
            return obj;
        })
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