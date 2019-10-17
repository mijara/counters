import React from 'react'
import styled from 'styled-components'

function Button ({ children, onPress }) {
  return (
    <Container onClick={onPress}>
      {children}
    </Container>
  )
}

const Container = styled.div`
  border-radius: 1000px;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0.25);
  cursor: pointer;
`

export default Button
