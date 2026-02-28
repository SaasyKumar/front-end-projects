import DynamicForm from "./DynamicForm";
export default function WorkForm({callback,state_obj}){
    const details=[
        {
            "id":"job",
            "content": "Job Title",
            "type": "text"
        },
        {
            "id":"employer",
            "content": "Employer",
            "type": "text"
        },
        {
            "id":"city",
            "content": "City/Town",
            "type": "text"
        },
        {
            "id":"start",
            "content": "Start Date",
            "type": "month"
        },
        {
            "id":"end",
            "content": "End Date",
            "type": "month"
        },
        {
            "id":"description",
            "content": "Description",
            "type": "text"
        },
    ];
    let out = state_obj.map(item=>
        <DynamicForm state={item} input_details={details} callback={callback} key="work"></DynamicForm>
    )
    return(
        <>
            {out}
        </>
    )
}