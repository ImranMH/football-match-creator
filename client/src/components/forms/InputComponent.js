import React from 'react'
import PropTypes from 'prop-types'

const InputComponent = ({className, onChange, value, type, name, placeholder}) => {
  return (
    <div className={className} data-validate="Name is required" >
      <input onChange={onChange} value={value} className="input1" type={type} name={name} placeholder={placeholder} />
      <span className="shadow-input1">{placeholder}</span>
    </div>
  )
}

InputComponent.propTypes = {
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}
InputComponent.defaultProps = {
  type:"text",
  className: "wrap-input1 validate-input"
}
export default InputComponent;