import React, {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { GetColleges, PostCollege } from "./axios";
import './CollegeList.css';
// import { GetCollege } from "./axios";
// import UseContext from "./usercontext";
function CollegeList(props) {
  // let users=useContext(UserContext)

  let history = useHistory();

  let [collegename, setCollegeName] = useState("");
  let [countrystate, setCountryState] = useState("");
  let [code, setCode] = useState("");
  let [city, setCity] = useState("");
  let [tabledata,setTabledata]=useState([]);



  let userData = {
    collegename: collegename,
    collegecode: code,
    collegecountrystate: countrystate,
    collegecity: city
  };
  useEffect(async () => {
      let data=await GetColleges()
    // console.log(data.data)
    setTabledata(data.data)
    console.log(tabledata)
    
},[])

  return (
    <>
    <form
    onSubmit={async (e) => {
      e.preventDefault();
      console.log(userData)

      await PostCollege(userData);

      setCollegeName("");
      setCode("");
      setCountryState("");
      setCity("");
     
    }}
  >
    


    <div className="colleges">
      <div className="container">
        <h3>
      {props.match.params.id} Please Enter The College And The Respective Country With State and
          City
        </h3>
        <small>
          <b>(Please Make Sure The Data is Correct While Entering)</b>
        </small>
      
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>CollegeName</th>
                <th>CollegeCode</th>
                <th>Country And State</th>
                <th>city</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>
                  <input
                    type="text"
                    placeholder="CollegeName"
                    required
                    value={collegename}
                    onChange={(e) => {
                      setCollegeName(e.target.value);
                    }}
                  ></input>
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="CollegeCode"
                    required
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                  ></input>
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="Country&State"
                    required
                    value={countrystate}
                    onChange={(e) => {
                      setCountryState(e.target.value);
                    }}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  ></input>
                </th>
              </tr>
              
            </thead>
          </table>
          <button className="btn btn-danger" type="submit">
            Add
          </button>
         
        </div>

        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
               {
                   tabledata.map((colleges)=>(
                       <tr>
                    <td>{colleges.collegename}</td>
                    <td>{colleges.collegecode}</td>
                    <td>{colleges.collegecountrystate}</td>
                    <td>{colleges.collegecity}</td>
                  </tr>
                   
                   )
                )
                  
            }
              </tr>
            </thead>
          </table>
        </div>
       
      </div>
    
    </div>
    <div className="logout">
      <button className="btn btn-danger" type="submit"  onClick={()=>{
                             window.localStorage.removeItem("app_token");
                            //  setisAuth(false)
                             history.push(`/`);
                        }}>Logout
          </button>
</div>
    </form>
   
    </>
  );
}

export default CollegeList;
