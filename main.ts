// get reference to the form and display area
const form =document.getElementById ("resume-form") as HTMLFormElement;
const resumeDisplayElement= document.getElementById("resume-display") as HTMLDivElement

// Handle form submission
form.addEventListener("submit",(event:Event)=>{
    event.preventDefault();   //prevent page reload

    //collect input value

    const name  = (document.getElementById ("name") as HTMLInputElement).value
    const email  = (document.getElementById ("email") as HTMLInputElement).value
    const phone  = (document.getElementById ("phone") as HTMLInputElement).value
    const education  = (document.getElementById ("education") as HTMLInputElement).value
    const experience = (document.getElementById ("experience") as HTMLInputElement).value
    const skills = (document.getElementById ("skills") as HTMLInputElement).value

    //generate resume content dynamically

    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenditable="true">${ name }</span></p>
    <p><b>email:</b><span contenditable="true">${ email }</span></p>
    <p><b>phone:</b><span contenditable="true">${ phone }</span></p>

    <h3> Education </h3>
    <p> <contenditable="true">${education} </p>

    <h3> Expeience </h3>
    <p> <contenditable="true">${experience} </p>
    
    <h3> Skills </h3>
    <p> <contenditable="true">${skills} </p>
    
    `;
    //display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
     } else{
        console.error("the resume display element is missing.");


        }
    }

);
