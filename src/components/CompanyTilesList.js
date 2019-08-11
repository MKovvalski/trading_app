import React from 'react'

import CompanyTile from '../components/CompanyTile/CompanyTileReq'

const CompanyTileList = ({ companies }) => (
  <div className='company-tiles-list'>
    {companies.map(symbol =>
      <CompanyTile
        key={symbol}
        symbol={symbol}
      />
    )}
  </div>
)

export default CompanyTileList