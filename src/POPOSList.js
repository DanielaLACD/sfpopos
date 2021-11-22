import POPOSSpace from './POPOSSpace';
import React from 'react';
import './POPOSList.css';
import data from './sfpopos-data.json'


function POPOSList() {

  const spaces = data.map(({title, address, images}) => {
    return (
      <POPOSSpace
        key={title}
        name={title}
        address={address}
        image={images[0]}
      />
    )
  })

  return (
    <div className="POPOSList">
      { spaces }
    </div>
  )
}



export default POPOSList
