import React, {useState} from 'react'
import axios from 'axios'
import {setNewQueriedUser} from '../redux/querySlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';


const Landing = () => {
  const [userInput, setUserInput] = useState("")
  const [dataPointType, setDataPointType] = useState("email")

  const dispatch = useDispatch()
  const navigate = useNavigate()


  let handleClick = (type, info)=>{
    let userInfo = type === "email" ? {
      email: info
    } : {
      phone: info
    }

    axios.post("http://localhost:5000/api/user_data", userInfo).then(res=>{
      console.log(res.data)
      dispatch(setNewQueriedUser(res.data))
      navigate('/results')
    }).catch(err=>alert("Could not find any associated data"))
  }
  return (
    <div className="Landing">
      <div >
        <h1 className='catchphrase'> Your information is out there...</h1>
        <h1> We can tell you how much</h1>
      </div>
      <div className='info-input'>
        <div className='first-line-info-input'>
          <h3> Find data related to the</h3>
        <select onChange={(e)=>setDataPointType(e.target.value)}style={{marginLeft:'10px'}}id="data-type">
          <option value="email"> email </option>
          <option value="phone"> phone number</option>
        </select>
          <h3 style={{margin:'0px 10px'}}>:</h3>
          <input onChange={(e)=>{setUserInput(e.target.value)}} placeholder='insert email or phone here'/>
        </div>
          <button onClick={()=>{handleClick(dataPointType, userInput)}}>SEARCH {dataPointType.toUpperCase()}</button>
      </div>
    </div>
  )
}

export default Landing