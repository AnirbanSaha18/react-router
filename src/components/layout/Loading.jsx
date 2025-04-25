import React from 'react'
import {RingLoader} from 'react-spinners'
  function Loading() {
  return (
    <>
    {/* <div>Loading</div> */}
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", fontSize:"48px"}}>
    <RingLoader  color="blue"></RingLoader>
    </div>
    </>
  )
}

export {Loading}