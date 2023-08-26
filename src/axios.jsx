import { useEffect, useState } from "react"
import axios  from "axios";


 export function Axios() {
     const[userdata,setUserdata]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            
        console.log(response)
            
            setUserdata(response.data)


        })
    },[])
  return (
    <>
    <div>Axios</div>
    {userdata.map((data)=>{
        return(
            <h1 key={data.id}>{data.title}</h1>
        )
       
    })}
    </>
  )
}

// export default Axios