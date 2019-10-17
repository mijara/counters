import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Number from './Number'
import { IoIosRemove, IoIosAdd } from 'react-icons/io'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import Name from './Name'

function Counter ({ id, backgroundColor, foregroundColor }) {
  const [count, setCount] = useLocalStorage(`'counter:${id}'`, 0)
  const [name, setName] = useLocalStorage(`'name:${id}'`, `Player ${id + 1}`)

  const handleRemove = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <Container backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
      <Row>
        <Name name={name} onChange={setName}/>
      </Row>

      <Row>
        <Button onPress={handleRemove}><IoIosRemove/></Button>
        <Number value={count} onChange={setCount}/>
        <Button onPress={handleAdd}><IoIosAdd/></Button>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  user-select: none;
  padding: 32px 32px;
  margin-bottom: 1px;
  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
  ${({ foregroundColor }) => `color: ${foregroundColor};`}
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export default Counter
