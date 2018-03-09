import React from 'react'
import PropTypes from 'prop-types'


const SelectInput = ({data, nil, dftvlu, value, onchange, label, cnc,cns }) => {
 const options = (data) =>{
  if(data){
    return data.map((opt,index) => {
      return <option key={index} value={opt} >{opt} </option>
    })
  }
 }
  return (
    
  <div className={cnc}>
      <label htmlFor={nil} >{label}</label>
      <select className={cns} id={nil} name={nil} value={value} onChange={onchange}>
        <option defaultValue ='' > {dftvlu}</option>
        {options(data) }
      </select>
    </div>
  )
}
SelectInput.propTypes = {
  data: PropTypes.array,
  nil: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  dftvlu: PropTypes.string.isRequired,
  cnc: PropTypes.string,
  cns: PropTypes.string,
}
SelectInput.defaultProps = {
  cnc: 'form-group col-md-6',
  cns: 'custom-select mr-sm-2'
}
export default SelectInput;