import React from 'react'
import axios from 'axios'

const Fitness = () => {
    const token = localStorage.getItem('token')
    const showData = async() =>{
        if(token===undefined){
            alert("User is not authorised to view particular page!!")
        }
        else{
            const response = await axios.get("https://node-handson-backend.onrender.com/api/fitness",{
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
    <button onClick={showData}>Fitness</button>
    </>
  )
}

export default Fitness