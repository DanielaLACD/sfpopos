  import { useState } from 'react'
  import React from 'react';
  import POPOSSpace from './POPOSSpace';
  import './POPOSList.css';
  import data from './sfpopos-data.js'

  function POPOSList() {
    const [ query, setQuery ] = useState('')
    const spaces = data
    .filter(obj => obj.title.includes(query) || obj.address.includes(query))
  .map(({ title, address, images, hours }, id) => {

    		return (
    			<POPOSSpace
    				id={id}
    				key={`${title}-${id}`}
            name={title}
            address={address}
    				image={images[0]}
    				hours={hours}
          />
    		)
    	})

    return (

      <div className="POPOSList">
      <form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
        { spaces }
      </div>
    )
  }

  export default POPOSList
