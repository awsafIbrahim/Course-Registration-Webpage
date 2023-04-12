/* 
 * Main scripts file for the timetable website.
 * Assignment 4, CSCI 1170, Winter 2022
 * Starter code provided by Dr. Raghav V. Sampangi
 */
 
//Reading the data that is given


let container=document.querySelector(".container")
let Mainsection=document.createElement("section")
Mainsection.className="course-info"



//Iterating through the loop to read the array objects

for(let item in courseInfo){
    
   //Creating the required variables to store the data
   let section=document.createElement("section")
    section.className="course-offering-info "

    let firstDiv=document.createElement("div")
    firstDiv.className="first-div"

    let heading=document.createElement("h1")
    heading.className="heading-class"
    let paragraph=document.createElement("p")
    paragraph.className="para-class"
     let paragraph1=document.createElement("p")
     paragraph1.className="para-class"
     let paragraph2=document.createElement("p")
     paragraph2.className="para-class"
     let paragraph3=document.createElement("p")
     paragraph3.className="para-class"
     let button=document.createElement("button")
     button.className="button-class"
     let division=document.createElement("div")
     division.className="div-class"
     
     //Setting up the event listener

     button.addEventListener("click", setter)
       
     //Creating the function that shows the course description
     function setter(){
        
        let p=document.createElement("p")
        p.innerText=(courseInfo[item].code+": "+ courseInfo[item].name+"\n")
        document.querySelector(".course-selection-bag").appendChild(p)
     }


    
    heading.innerHTML=courseInfo[item].code +": " +courseInfo[item].name
   paragraph.innerHTML=courseInfo[item].prof
    paragraph1.innerHTML="Current enrollment: "+courseInfo[item].currEnroll+" (max: " +courseInfo[item].maxEnroll+")"
    paragraph2.innerHTML="Location: "+courseInfo[item].location+"\n"+"(schedule: "+courseInfo[item].schedule+")"
    paragraph3.innerHTML=courseInfo[item].info
    button.innerHTML="Sign-up for course"
      
    //Appending the required documents

    division.appendChild(button)
    paragraph3.appendChild(division)
    paragraph2.appendChild(paragraph3)
    paragraph1.appendChild(paragraph2)
   
    firstDiv.appendChild(paragraph1)
    
    paragraph.appendChild(firstDiv)
    
    
    heading.appendChild(paragraph)
   
   section.appendChild(heading)
    
   Mainsection.appendChild(section)

 
    
}





container.appendChild(Mainsection)


