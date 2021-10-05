import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const PazzDropdown = () => {
  const options = ['TeslaSafe', 'RICE', 'PAZ', 'BNB']
  const defaultOption = options[0]
  return (
    <div>
      <Dropdown options={options} value={defaultOption} placeholder="Select an option" className="paz-dropdown" />;
    </div>
  )
}

export default PazzDropdown
