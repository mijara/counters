import React from 'react'
import styled from 'styled-components'

function Number ({ value, onChange }) {
  const handleChange = (e) => {
    onChange(parseInt(e.target.value))
  }

  return (
    <Container>
      <Input type="number" value={value} onChange={handleChange}/>
    </Container>
  )
}

const Container = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  background-color: transparent;
  border: 0;
  text-align: center;
  padding: 4px 6px;
  border-radius: 5px;
  margin-bottom: 16px;
  color: #ffffff;
  font-weight: 300;
  font-size: 48px;
  outline: none;
  width: 100px;
  margin-top: 8px;
  
  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }
`

export default Number
