import React from 'react'
import styled from 'styled-components'

function Number ({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 48px;
`

export default Number
