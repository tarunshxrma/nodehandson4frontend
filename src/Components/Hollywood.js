import React from 'react'
import axios from 'axios'

const Hollywood = () => {
    const token = localStorage.getItem('token')
    const showData = async() =>{
        if(token===undefined){
            alert("User is not authorised to view particular page!!")
        }
        else{
            const response = await axios.get("https://node-handson-backend.onrender.com/api/hollywood",{
                headers: {
                    'Authorization': "Bearer " + token
                }
            })
            const data = response.data;
            console.log(data);
        }
    }
  return (
    <>
    <button onClick={showData}>Hollywood</button>
    </>
  )
}

export default Hollywood