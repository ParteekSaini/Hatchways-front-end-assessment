/*
Parteek Saini
+1-236-512-0453
sainiparteek18@gmail.com
https://www.linkedin.com/in/parteek-saini-95a122158/
*/

import './App.css';
import React, {useEffect, useState } from 'react';
import {StudentCard} from './components/StudentCard';
import { searchByTag, searchByName } from "./Helper/FunctionHelper";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function App() {
  // Using hooks for storing student records , search inputs data of name and tag in studentProfiles, nameQuery, and tagQuery respectively
  const [nameQuery , setNameQuery] = useState("");
  const [tagQuery, setTagQuery] = useState("");
  const [studentProfiles , setStudentProfiles] = useState([]);

  // Defined fetchData function to fetch data from API y using await 
  async function fetchData(url) {
    const response = await fetch(url);
    const json = await response.json();
    let newStudentProfiles = [];
    
    // Using map function to store student records in newStudentProfiles array
    json.students.map(student => {
      // Calculating the average and adding to array
      const average = student.grades.reduce((sum,i)=> sum+Number(i),0)/student.grades.length;
      student.average = average;
      return newStudentProfiles.push(student);
    });

    // Settting the studentProfiles 
    setStudentProfiles(newStudentProfiles);
  }

  // Using useEffect to call the fetchData function
  useEffect(() => {
    fetchData(`https://app.hatchways.io/api/assessment/students`);
  }, []);
 
  // returning the input tags for search inputs at the top of page and using StudentCard to display student records
    return ( 
      <div className='container'>
        <input className="search" type ="text" placeholder='Search By Name' value={nameQuery} onChange={(e)=> setNameQuery(e.target.value)}/><br />
        <input className="search" type="text" placeholder='Search By Tag' value={tagQuery} onChange={(e)=> setTagQuery(e.target.value)} />
        
        {/* Calling the searchByTag function inside searchByName to find search results satisfying both input searches */}
        {<StudentCard studentProfiles = {searchByName(searchByTag(studentProfiles,tagQuery ),nameQuery)} /> }     
      </div>
     );
  }
