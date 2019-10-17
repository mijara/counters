import React from 'react'
import styled from 'styled-components'

function Name ({ name, onChange }) {
  const handleOnChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <Input value={name} onChange={handleOnChange}/>
  )
}

const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.25);
  border: 0;
  text-align: center;
  padding: 4px 6px;
  border-radius: 5px;
  margin-bottom: 16px;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  width: 35%;
`

export default Name
