import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import Number from './Number'
import { IoIosRemove, IoIosAdd } from 'react-icons/io'

function Counter ({ id, backgroundColor, foregroundColor }) {
  const [count, setCount] = useLocalStorage(`'counter:${id}'`, 0)

  const handleRemove = () => {
    setCount(count - 1)
  }

  const handleAdd = () => {
    setCount(count + 1)
  }

  return (
    <Container backgroundColor={backgroundColor} foregroundColor={foregroundColor}>
      <Button onPress={handleRemove}><IoIosRemove/></Button>
      <Number>{count}</Number>
      <Button onPress={handleAdd}><IoIosAdd/></Button>
    </Container>
  )
}

function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const Container = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 32px 80px;
  margin-bottom: 1px;
  ${({ backgroundColor }) => `background-color: ${backgroundColor};`}
  ${({ foregroundColor }) => `color: ${foregroundColor};`}
`

export default Counter
