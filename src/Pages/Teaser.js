import React from 'react'
import { useSelector } from 'react-redux'
import {selectQueriedUser} from '../redux/querySlice'

const Teaser = () => {
  let currentQueriedUser = useSelector(selectQueriedUser)
  // console.log(currentQueriedUser
  //   )












  return (
    <div style={{width:"90vw"}}>{currentQueriedUser? JSON.stringify(currentQueriedUser): "No user found"}</div>
  )
}

export default Teaser