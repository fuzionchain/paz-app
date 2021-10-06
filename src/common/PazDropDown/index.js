import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const PazzDropdown = () => {


  
  const options = [
    { className: 'tesla-safe-dropdown-icon', value: 'TeslaSafe', label: 'TeslaSafe' },
    { className: 'rice-dropdown-icon', value: 'RICE', label: 'RICE' },
    { className: 'paz-dropdown-icon', value: 'PAZ', label: 'PAZ' },
    { className: 'bnb-dropdown-icon', value: 'BNB', label: 'BNB' },
  ]
  const defaultOption = options[0]
  return (
    <div>
      <Dropdown options={options} value={defaultOption} placeholder="Select an option" className="paz-dropdown" />;
    </div>
  )
}

export default PazzDropdown
