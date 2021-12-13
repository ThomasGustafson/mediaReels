import React, { useState } from "react";
import{View, Text , StyleSheet,Image, TouchableOpacity, ShadowPropTypesIOS} from 'react-native';
import data from "../data/data.json";
import "../css/style.css";





const Reel = ()=>{

  const sqlite3 = require('sqlite3');






  
  
  

    console.log('Connected to the in-memort Sqlite database.');



    const [reels,setReels] = useState(data);
    const[addFormData, setAddFormData] = useState({ 
     
     reelId: '',
     reelName: '',
     reelYear: '',
     reelStudio: '',
     reelFormat: '',
     reelNotes: ''
    
     });
    
    
     const handleAddFormChange = (event) => {
    
        event.preventDefault();
      
        const fieldName = event.target.getAttribute('name')
        const fieldValue = event.target.value;
      
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
      
        setAddFormData(newFormData);
      
      
      };
      
      
      const handelAddFormSubmit = (event) => {
      
      
        event.preventDefault();
      
        const newReel = {
      
          reelImage: addFormData.reelImage,
          reelId: addFormData.reelId,
          reelName: addFormData.reelName,
          reelYear: addFormData.reelYear,
          reelStudio: addFormData.reelStudio,
          reelFormat: addFormData.reelFormat,
          reelNotes: addFormData.reelNotes,
      
      
      
      
        };

        
      
        const newReels = [...reels, newReel];
        setReels(newReels);
      
       
      



      
      };

    


      function createTable() {
    

        db.serialize(() =>{
        
        db.run('Create Table If NOT EXISTS Reels(reelId, reelName, reelYear, reelStudio, reelFormat , reelNotes)')
        
        
        }

        )





        function insert(reel){







          let db = new sqlite3.Database('../data/test.db');
          
          
          
           db.run(
               
              'INSERT INTO Reels(reelId,reelName,reelYear,reelStudio, reelFormat, reelNotes)' 
             ,' Values',
              (reel.reelId),
              (reel.reelName),
             (reel.reelYear),
             (reel.relStudio),
             (reel.reelFormat),
             (reel.reelNotes),
              
              
              
              
              
              
              
              
              
              
              
              
              function(err){
            
              
          
          
          if(err){
          
          return console.log(err.message);
          }
          
          console.log('a reel has been inserted sucessfully');
          
          })




        }
    return(
      







<div className="app-container">
 <h4 className="mediaReelsHeader">Media Reels</h4>   
<h4 className="myReelsHeader">My Reels</h4>
<table>
<thead>
<tr>
<th>Reel Id</th>
<th>Reel Name</th>
<th>Reel Year</th>
<th>Reel Studio</th>
<th>Reel Format</th>
<th>Reel Notes</th>
</tr>
</thead>
<tbody>
 {reels.map((reel)=><tr>  
 <td>{reel.reelId}</td>                                                       
 <td>{reel.reelName}</td>
 <td>{reel.reelYear}</td>
 <td>{reel.reelStudio}</td>
 <td>{reel.reelFormat}</td>
 <td>{reel.reelNotes}</td>
</tr>)}
</tbody>
</table>

<form onSubmit={handelAddFormSubmit}>














{/* will only be able to view reel id not edit */}









<input
id="reelIdInput"
type= "number"
name='reelId'
placeholder="reel Id"
onChange={handleAddFormChange}

/>



<input 
id="reelNameInput"
type= "text"
name='reelName'
placeholder="reel Name"
onChange={handleAddFormChange}

/>

<input
id="reelYearInput"
type="text"
name='reelYear'
placeholder="reel Year"
onChange={handleAddFormChange}


/>


<input 
id="reelStudioInput"
type='text'
name='reelStudio'
placeholder="reel Studio"
onChange={handleAddFormChange}

/>

<input
id="reelFormatInput"
type='text'
name='reelFormat'
placeholder="reel Format"
onChange={handleAddFormChange}

/>


<input
id="reelNotesInput"
type='text'
name='reelNotes'
placeholder="reel Notes"
onChange={handleAddFormChange}



/>


<button  id="submitButton"     type="submit">Add</button>
 <button id="ResetButton"      type="reset">ClearForm</button>


</form>



    













    



</div>
    






    














    )

    


 

 

 }

}
 

 

export default Reel;