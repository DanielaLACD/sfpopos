// src/POPOSSpace.js

import React from 'react'
import Logo from './logo.svg'

function POPOSSpace(props) {
  const {name, image, address} = props
  return (
    <div>
      <img
      src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/100-pine.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/101-california.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/343-sansome-roof-garden.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/525-market-street-plaza.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/555-california.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/citigroup-center.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/embarcadero-center.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/empire-park.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/garden-terrace-at-150-california.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

      <img
      src={`${process.env.PUBLIC_URL}images/transamerica-redwood-park.jpg`}
      width="300"
      height="300"
      alt="Hello"
      />
      <h1>{name}</h1>
      <div>{address}</div>

    </div>
  )
}

export default POPOSSpace
