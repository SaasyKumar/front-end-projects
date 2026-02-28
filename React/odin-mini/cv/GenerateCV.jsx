
function Jobs({details}){
    console.log(details);
    return(
        <>
            <h3>{details["job"]} at {details["employer"]}</h3>
            <div>From {details["start"]} to {details["end"]}</div>
            <span>City: {details["city"]}</span>
            <p>{details["description"]}</p>
        </>
    )
};

function Education({details}){
    console.log(details)
    return(
        <>
            <h3>{details["degree"]} at {details["school"]}</h3>
            <div>From {details["start"]} to {details["end"]}</div>
            <span>City: {details["city"]}</span>
        </>
    )
};

export default function GenerateCV({form}){
    console.log(form);
    let education = form["education"].map(item=>{
        return <Education details={item}></Education>;
    });
    let job = form["jobs"].map(item=>{
        return <Jobs details={item}></Jobs>;
    });
    return(
        <>
            <h1>{form["first_name"] + " " + form["last_name"]}</h1>
            <div>Age:{form["age"]}</div>
            <div>email: {form["email"]}</div>
            <div>Phone Number:{form["phone_number"]}</div>
            <div>Experience: {form["experience"]} years</div>
            <h1>Education and Qualification</h1>
            {education}
            <h1>Work Experience</h1>
            {job}
        </>
    )
}