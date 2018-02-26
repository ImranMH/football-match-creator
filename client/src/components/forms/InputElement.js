import React from 'react'
import PropTypes from 'prop-types'


const InputElement = ({ nil, type, placeholder, value, onchange, label }) => {
  return (
    <fieldset>
      <label htmlFor={nil}> {label} </label>
      <input className="form-control" type={type} id={nil} name={nil} placeholder={placeholder} value={value} onChange={onchange} />
    </fieldset>
  )
}
InputElement.propTypes = {
  nil: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
InputElement.defaultProps = {
  type: 'text'
}
export default InputElement;