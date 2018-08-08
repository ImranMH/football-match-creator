import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children, onSubmit,cn}) => {
  return (
    <form  className={cn} onSubmit={onSubmit }>
      {children}
    </form>
  )
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  cn: PropTypes.string,
}
Form.defaultProps = {
  cn: 'form-group',
}
export default Form
