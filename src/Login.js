
import React, { useState } from 'react';
import "./Login.css";
import { PostStudent } from "./axios";
import {Link,useHistory} from "react-router-dom";

function Login() {
    const[studentName,setName]=useState("")
   
    

    let studentData = {
    studentName:studentName
      };


    let history=useHistory();

    return (

        <form
    onSubmit={async (e) => {
      e.preventDefault();
      console.log(studentData)

      await PostStudent(studentData);
      

      setName("")
      history.push(`./CollegeList/${studentName}`)
    }}
  >
       
             <div className="student_name">
                 
                
                     
                    <div className="container">
                    <div className="row">
                     <div className="col-lg-5">
                    <label><b>StudentName</b></label>
                    <input className="form-control" type="text" placeholder="StudentName" onChange={(e)=>{setName(e.target.value)}}/>
                    
                    </div>
                    
                   
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                             
                       <button className="btn btn-danger " type ="submit" >Login</button>

                             {/* <Link to="./CollegeList" onClick={()=>setPrint(true)} className="btn btn-warning">login</Link> */}
                             
                        </div>
                    </div>
                    {/* {
                        print?<h1>{data}</h1>:null
                   } */}
                    </div>
              
            
             </div>
             </form>
    )}
        

export default Login;
