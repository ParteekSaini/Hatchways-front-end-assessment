/*
Parteek Saini
+1-236-512-0453
sainiparteek18@gmail.com
https://www.linkedin.com/in/parteek-saini-95a122158/
*/

import React from 'react';
import {  useState } from "react";
import { addTag, showGrades } from "./FunctionHelper"

function StudentCard({studentProfiles}){
    
  // Using hook to define tag for storing the add a tag value 
  const [tag, setTag] = useState("");
 
  return (
    <div>
      {/* Using map function on studentProfiles to display all the required data in order by using grid*/}
      {studentProfiles.map((item, index)=>{ 
        return <div className='gridBox' key = {item.id}  > 

                {/* Image */}
                <div className='studentpic'  >
                  <img src={item.pic} alt="profilePic" />
                </div> {/* Image div closed*/}

                {/* Student Data */}
                <div className='studentdata'>

                  {/* Full Name */}
                  <p className ="name">{item.firstName.toUpperCase()} {item.lastName.toUpperCase()}</p>

                  {/* Email */}
                  <p>Email: {item.email}</p>

                  {/* Company */}
                  <p>Company: {item.company}</p>

                  {/* Skill */}
                  <p>Skills: {item.skill}</p>

                  {/* Average - Using reduce function to display average */}
                  <p>Average: {item.grades.reduce((sum,i)=> sum+Number(i),0)/item.grades.length}%</p>

                  {/* Grades - Using map function to display all grades */}
                  <div style={{display:"none"}} id={item.id}>{item.grades.map((grade, count)=>
                    {return <div key={count} >Test {++count}: &nbsp; &nbsp; {grade}% <br /> </div>})}
                  </div>
              
                  {/* Using form to display all the tags added and input field to add a tag  
                      Using addTag funtion to add tag to student profiles data */}
                  <form id={`tag_form${item.id}`} onSubmit={(e) => addTag(e, tag, item, setTag)}>
                    {/*  All Added tags displayed using map function */}
                    {item.tags && item.tags.length > 0
                      ? item.tags.map((tag,i) => 
                      {return <span key={`span${i}`}><span>{tag}</span>&nbsp; </span>})
                      : ""
                    }
                    <br/>

                    {/* tag input field to add tag to a specific tag */}
                    <input
                      key ={`input${item.id}`}
                      id={`input${item.id}`}
                      placeholder="Add a tag"
                      value= {item.tag}
                      onChange={(e) => setTag(e.target.value,index)}
                    />
                  </form>
                               
                </div> {/* Student Data div closed */}

                {/* Using font awesome to display + sign and calling showGrades to expand and toggle to - sign */}
                <div className='plus'>
                    <link href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" rel="stylesheet"/>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
                    <i className="fas fa-plus" id={`icon${item.id}`} onClick={() => {showGrades(item.id)}}></i>
                </div> {/* Plus sign div closed */}

              </div> // gridBox div closed
            })}

        </div> //return div closed
        
    );
}

export  {StudentCard} ;
