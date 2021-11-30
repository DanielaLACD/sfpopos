// src/POPOSSpace.js

import React from 'react'
import Logo from './logo.svg'
import './POPOSSpace.css'
function POPOSSpace(props) {
  const {name, image, address, hours} = props
  return (
    <div className="POPOSSpace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <div>{address}</div>
      <div className="Hour">{hours}</div>
    </div>
  )
}

export default POPOSSpace
