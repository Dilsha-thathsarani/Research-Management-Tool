import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, { useState } from "react";
import axios from "axios";

export default function AddMarking()  {

    const [sid, setSid] = useState("Sample");
    const [specialization, setSpecialization] = useState(null);
    const [schemeType, setschemeType] = useState(null);
    const [marks, setMarks] = useState(null);
    const [criteria, setCriteria] = useState([]);
    const [extra, setExtra] = useState(null);

    
    const handleCriteriaInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
    };

    const handleCriteria = (e) => {
        alert("New Criteria Added");
        console.log(e);
        setCriteria((prev) => [...prev, extra]);
    };

    const handleCreate = async () => {
        const data = new FormData();
        
        const newMarking = {
            sid,
            specialization,
            schemeType,
            marks,
            criteria,
        };

        axios.post("http://localhost:8070/marking/",newMarking).then(()=>{

            alert("Marking Scheme Saved Successfully");
            
    
         }).catch((err)=>{
    
            alert(err);
         })
    };





    return(
        <div className="marking-container">
            <div style={{backgroundColor:"#0F0934"}}>

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>

               
            </div>

            

            <div style={{backgroundColor:"white"}}>
            <div className="t-list-head-container">
                    <label className="h-text"> <label style={{color:"#FF5631"}}> CREATE</label> MARKING</label> <br className="br1" />
                    <label className="h-text">SCHEME</label>
                    <hr />
            </div>
            
            <div className="m-from-container">
                <label style={{fontWeight:'bold'}}> General Information</label>
                <form >
                        <div className="mb-3">
                            <label className="m-form-label">Specialization</label>
                            
                            <select className='form-control m-select' name="Field" id="Field" style={{fontSize:'0.8rem', width:"450px",border: "2px solid #ced4da", height:"30px"}}
                                onChange={(e) => setSpecialization(e.target.value)}
                            >
                                <option value="Default">Select one</option>
                                <option value="Artificial Interligance">Artificial Interligance</option>
                                <option value="Machine Learning">Machine Learning</option>
                                <option value="Games">Games</option>
                                <option value="Robotics">Robotics</option>
                            </select>

                        </div>

                        <div className="m-sub">

                        <div className="m-sub-container">
                            <div className="mb-3">
                                <label className="m-form-label" style={{color:"#322B5F"}}>Scheme Type</label>
                                <select className='form-control m-select' name="Field" id="Field" style={{fontSize:'0.8rem', width:"280px",border: "2px solid #ced4da", height:"30px"}}
                                    onChange={(e) => setschemeType(e.target.value)}
                                >
                                <option value="Default">Select one</option>
                                <option value="Document">Document</option>
                                <option value="Persentation">Persentation</option>
                            </select>
                            </div>

                        </div>
                        <div className="m-sub-container2">
                            <div className="mb-3">
                                <label className="m-form-label" style={{color:"#322B5F"}}>Total Marks</label>
                                <input type="text"  style={{width:"150px", height:"30px"}} className="t-form-control" id="cUName"
                                    onChange={(e) => setMarks(e.target.value)}
                                />
                            </div>

                        </div>
                        </div>

                        <label style={{fontWeight:'bold'}}> Add New Criteria</label>

                        <div className="mb-3">
                            <label className="m-form-label">Criteria Name</label>
                            <input type="text" name="des" style={{width:"450px", height:"30px"}}  id="cName"
                                onChange={handleCriteriaInput}
                            />
                        </div>

        
                        <div className="mb-3">
                            <label className="m-form-label">Mark Percentage (%)</label>
                            <input type="text" name="mark" style={{width:"450px", height:"30px"}}  id="cName"
                                onChange={handleCriteriaInput}
                            />
                        </div>

                        



                    </form>

                    <button  className="btn btn-primary" style={{backgroundColor:"#84809F",width:"200px",fontWeight:"bold"}} onClick={handleCriteria} >+ Add criteria</button>
                            <button  className="btn btn-primary" style={{backgroundColor:"#0F0934",width:"200px",fontWeight:"bold",marginLeft:'20px'}} onClick={handleCreate} > Save</button>

                    <div className="bottom-t-container">
                        <label className="bottom-t" style={{color:"#FF5631"}}> SLIIT</label> <label className="bottom-t"> Research</label> <br />
                        <label className="bottom-t"> Management Tool</label>
                    </div>
            
                </div>

            </div>

            <div style={{backgroundColor:'#D5D3E2'}}>
                <div className="t-list-head-container">
                        <label className="h-text"> <label style={{color:"#FF5631"}}> 80%</label> MARKS</label> <br className="br1" />
                        <label className="h-text">TO ALLOCATE</label>       
                </div>

                <div className="t-list-tb-container">

                    <table className="t-table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col" style={{width:'220px'}}>Criteria</th>
                            <th scope="col">Marks (%)</th>
                            <th scope="col" >Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        {criteria.map((data,index)=>(

                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>
                                    {data.des}
                                </td>
                                <td>
                                    {data.mark}
                                </td>
                                                                
                                <td>
                                <button className="btn" style={{color:"#0F0934"}}> Remove </button>
                                </td>
                            </tr>
                        ))}
                        
                        </tbody>
                    </table>

                                

                
                </div>

            </div>

            
        </div>
    );
        


}