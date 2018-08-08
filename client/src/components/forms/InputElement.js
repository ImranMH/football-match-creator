import React from 'react'
import PropTypes from 'prop-types'


const InputElement = ({ nil, cnc, cni, type, placeholder, value, onChange, label }) => {
  return (
    <fieldset className={cnc}>
      <label htmlFor={nil}> {label} </label>
      <input className= {cni} type={type} id={nil} name={nil} placeholder={placeholder} value={value} onChange={onChange} />
    </fieldset>
  )
}
InputElement.propTypes = {
  nil: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  cnc: PropTypes.string,
  cni: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
}
InputElement.defaultProps = {
  type: 'text',
  cnc: 'form-group',
  cni: 'form-control'
}
export default InputElement;