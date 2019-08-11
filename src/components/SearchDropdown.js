import React from 'react'

const searchDropdown = ({ searches = [], onClick }) => (
  <div className='search-dropdown'>
    {searches.map(company => (
      <div
        key={company['1. symbol']}
        className='search-dropdown__company'
        onClick={() => onClick(company)}
      >
        {company['1. symbol']}
        {company['2. name']}
      </div>
    ))}
  </div>
)

export default searchDropdown
