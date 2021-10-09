import React from 'react'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const PazzDropdown = () => {
  const pazzdropdownClasses =
    {
      boxSizing: 'border-box',
      color: 'white',
      cursor: 'pointer',
      display: 'block',
      backgroundColor: '#0c0726',
      padding: '8px 40px',
    }

  // var pazzdropdownClasses = classNames(
  //   'Dropdown-option',
  //   {
  //     boxSizing: 'border-box',
  //     color: 'white',
  //     cursor: 'pointer',
  //     display: 'block',
  //     backgroundColor: '#0c0726',
  //     padding: '8px 40px',
  //   },
  //   'Dropdown-option.is-selected',
  //   {
  //     backgroundColor: '#0c0726',
  //     color: 'white',
  //     padding: '8px 40px',
  //   },
  //   'pazz-app-dropdown-menu',
  //   {
  //     width: '25vw',
  //     padding: '8px 40px',
  //   },
  //   'Dropdown-option:hover',
  //   {
  //     backgroundColor: '#0c0726',
  //     color: 'white',
  //     padding: '8px 40px',
  //   },
  //   'Dropdown-control',
  //   {
  //     backgroundColor: '#0c0726',
  //     color: 'white',
  //     padding: '8px 40px',
  //   },
  //   'Dropdown.menu',
  //   {
  //     padding: '8px 40px',
  //   },
  // )

  const options = [
    {
      value: 'TeslaSafe',
      label: 'TeslaSafe',
      className: 'tesla-safe-dropdown-icon',
    },
    { value: 'RICE', label: 'RICE', className: 'rice-dropdown-icon' },
    { value: 'PAZ', label: 'PAZ', className: 'paz-dropdown-icon' },
    { value: 'BNB', label: 'BNB', className: 'bnb-dropdown-icon' },
    { value: 'BUSD', label: 'BUSD', className: 'busd-dropdown-icon' },
  ]
  const defaultOption = options[0]
  return (
    <div>
      <Dropdown options={options} value={defaultOption} placeholder="Select an option" style={pazzdropdownClasses} />
    </div>
  )
}

export default PazzDropdown
