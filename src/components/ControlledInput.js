import React from 'react'

const controlledInput = ({ className, value, onChange, onClick }) =>
  <input
    className={className}
    type="text"
    value={value}
    onChange={onChange}
    onClick={onClick}
    autoComplete="off"
  />

export default controlledInput