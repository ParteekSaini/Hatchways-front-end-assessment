/*
Parteek Saini
+1-236-512-0453
sainiparteek18@gmail.com
https://www.linkedin.com/in/parteek-saini-95a122158/
*/


/******* This js file contains all the functions *******/


/****** searchByTag function is to search the records for tag */
const searchByTag = (items,tagQuery)=>{

  // First getting all the students with tags and saving them into studentsWithTag
  let studentsWithTag = [];

  for (const student of items) {
    if (student.tags) {
      studentsWithTag.push(student);
    }
  }
    // Now checking if tagQuery is null of empty or if studentsWithTag is null then return all items (records) 
    if (tagQuery === null || tagQuery === "" || studentsWithTag === []) return items;

    // Now saving all matches in searchResult array using for loop
    const searchResult = [];

    for(const item of studentsWithTag){
      for(const tag of item.tags){
        if(tag.toLowerCase().indexOf(tagQuery.toLowerCase())>-1){
          searchResult.push(item);
        }
      }
    }
    // Now making the array with unique records by deleting duplicate records and returning it
    const uniqueSearchResult = Array.from(new Set(searchResult));
    return uniqueSearchResult;
  }


/******* searchByName Function is used for searching records by full name *******/
const searchByName = (items,nameQuery)=>{
    
    /* Filtering the items and comapring nameQuery with custom made full name (By joining firstname and lastname) 
        and returing all matched records */
    return items.filter(
      (item) => 
      `${item.firstName} ${item.lastName}`.toLowerCase().indexOf(nameQuery.toLowerCase())>-1
      ) ;
      
  }


/******* addTag Function is used to add new tag to a student record *******/
  const addTag = (event, tag, student, setTag) => {
    event.preventDefault();
  
    // terminate and return if input is empty or null
    if (tag === "" || tag === null) return;
  
    /* if the tags property already exist, add the new tag
     else create a tags array and add the new tag */
    if (student.tags) {
      student.tags.push(tag);
    } else {
      student.tags = [tag];
    }
   
    // clear the tag input field
    setTag("");
    document.getElementById(`input${student.id}`).value = "";
  };


/******* showGrades function is used to show all the grades of a student when expanded *******/
  function showGrades(e){
    
    // Getting the e and making the id of a particular record's icon and getting that icon in icon variable
    const i = "icon"+e;
    const grade = document.getElementById(e);
    const icon = document.getElementById(i);
    
    // using if and else to toggle the icon from + to - and showing and not showing grades div 
    if(grade.style.display==="block"){
        grade.style.display="none";
        icon.className="fas fa-plus";
        
    }else{
        grade.style.display="block";
        icon.className="fas fa-minus";
    }
}

  export{
    searchByTag,
    searchByName,
    addTag,
    showGrades
  };