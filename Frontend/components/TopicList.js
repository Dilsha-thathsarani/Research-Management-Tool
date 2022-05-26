import "./CSS/topicsub.css";
import "./CSS/btrap.css";
import React, {useState,useEffect} from "react";
import axios from 'axios';
import { useHistory } from 'react-router';


export default function TopicList()  {

    const[request,setRequest] = useState([]);
    let history = useHistory();

    

    useEffect(()=>{

        
        axios.get("http://localhost:8070/topicReg").then((res)=>{
            setRequest(res.data.topicRouter);
            }).catch((err)=>{
                alert(err.message);
            })

    },[])

    console.log(request);


    const setData = (data) => {
        let { _id,tid, groupID, groupName, rField, rTopic,leaderEmail, comment,status} = data;

        localStorage.setItem('ID',_id);
        localStorage.setItem('tid', tid);
        localStorage.setItem('groupID', groupID);
        localStorage.setItem('groupName', groupName);
        localStorage.setItem('rField', rField);
        localStorage.setItem('rTopic', rTopic);
        localStorage.setItem('leaderEmail', leaderEmail);
        localStorage.setItem('comment', comment);
        localStorage.setItem('status', status);

        history.push('/AcceptTopic')
        
    }


    return(
        <div className="t-list-container">
            <div style={{backgroundColor:"#0F0934"}}>

                <div>
                    <img className="img-side" src="https://res.cloudinary.com/sliit-yasantha/image/upload/v1653068950/logo11_ggebb3.png"></img>
                </div>


            </div>
            <div style={{backgroundColor:"white"}}>

                <div className="t-list-head-container">
                    <label className="h-text" style={{color:"#FF5631"}}> SUBMITTED</label> <br className="br1" />
                    <label className="h-text">RESEARCH TOPICS</label>
                </div>
            
                <div className="t-list-tb-container">

                    <table className="t-table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Group_ID</th>
                            <th scope="col">Research Topic</th>
                            <th scope="col">Status</th>
                            <th scope="col" style={{width:'100px'}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {request.map((data,index)=>(

                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>
                                        {data.groupID}
                                    </td>
                                    <td>
                                        {data.rTopic}
                                    </td>
                                    <td>
                                        {data.status}
                                    </td>
                                    
                                    <td>
                                        <button className="btn btn-success purpled" style={{backgroundColor:"#0F0934",color:"white"}} onClick={() => setData(data)}> Review </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                    <div>
                        <button className="t-nav-btn">
                            Go to Questions
                        </button>
                    </div>
                

                
                </div>

                <div className="bottom-t-container">
                    <label className="bottom-t" style={{color:"#FF5631"}}> SLIIT</label> <label className="bottom-t"> Research</label> <br />
                    <label className="bottom-t"> Management Tool</label>
                </div>
            
            </div>
        </div>
    );
        


}