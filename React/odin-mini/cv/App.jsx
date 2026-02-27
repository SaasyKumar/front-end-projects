import { useState } from "react";
import SchoolForm from "./SchoolForm";
import WorkForm from "./WorkForm";
import GenerateCV from "./generateCV";

const emptyForm = {
    "first_name":"",
    "last_name":"",
    "email":"",
    "phone_number":"",
    "age":0,
    "experience":0,
    "education":[
        {
            "degree":"",
            "city":"",
            "school":"",
            "start":"",
            "end":""
        }
    ],
    "jobs":[
        {
            "job":"",
            "city":"",
            "employer":"",
            "start":"",
            "end":"",
            "description":""
        }
    ]
}
export default function App(){
    const [isSubmitted,setSubmitState] = useState(false);
    const [formData,setFormData] = useState(emptyForm);
    function updateFormData(key,ev){
        console.log(ev);
        setFormData((prev)=>{
            return{... prev,
                [key] : ev.target.value
            }
        });
    }
    function schoolData(obj){
        setFormData(prev=>({
            ...prev,
            "education":[obj]
        }));
    }
    function jobData(obj){
        setFormData(prev=>({
            ...prev,
            "jobs":[obj]
        }))
    }
    function submitData(){
        setSubmitState(true);
    }
    function resetForm(){
        setSubmitState(false);
        setFormData(emptyForm);
    }
    function editData(){
        setSubmitState(false);
    }
    let details =[
        {
            "id":"first_name",
            "content": "First Name",
            "type": "text"
        },
        {
            "id":"last_name",
            "content": "Last Name",
            "type": "text"
        },
        {
            "id":"email",
            "content": "EmailID",
            "type": "email"
        },
        {
            "id":"phone_number",
            "content": "Phone Number",
            "type": "tel"
        },
        {
            "id":"age",
            "content": "Age",
            "type": "number"
        }
    ];
    let form =[];
    function generateInputField({id,content,type}){
        return <div key={id}><span>{content}</span><input type={type} id={id} onChange={updateFormData.bind(null,id)} value={formData[id]}></input></div>
    }
    form = details.map((item)=> generateInputField(item));
    return(
        isSubmitted ?(
            <>
                <GenerateCV form={formData}></GenerateCV>
                <button onClick={editData}>EDIT</button>
                <button onClick={resetForm}>Reset</button>
            </>
        ):(
            <>
                <h1>Personal Details</h1>
                {form}
                <h1>Education and Qualification</h1>
                <SchoolForm callback={schoolData} state_obj={formData["education"]}></SchoolForm>
                {/* <button>Add Another</button> */}
                <h1>Work Experience</h1>
                <WorkForm callback={jobData} state_obj={formData["jobs"]}></WorkForm>
                <h1>Skills</h1>
                <button onClick={submitData}>SUBMIT</button>
             </>
        )
    )
}
