import React, { useEffect } from 'react'

function Effect() {
  
  useEffect(() => {
    console.log("connect");
    return console.log("disconnect")
  })

  return (
    <h4>React</h4>
  )
}


export default Effect
