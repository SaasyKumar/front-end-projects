import DynamicForm from "./DynamicForm";
export default function SchoolForm({callback,state_obj}){
    var details=[
        {
            "id":"degree",
            "content": "Degree",
            "type": "text"
        },
        {
            "id":"city",
            "content": "City/Town",
            "type": "text"
        },
        {
            "id":"school",
            "content": "School",
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
        }
    ];
    let out = state_obj.map(item=><DynamicForm state={item} input_details={details} callback={callback}></DynamicForm>);
    return(
        <>
            {out}
        </>
    )
};
