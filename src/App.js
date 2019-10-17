import React from 'react'
import './App.css'
import Counter from './components/Counter'

const colors = ['#6699cc', '#ba553c', '#acbf3e', '#9363a9', '#329fa3', '#d3af56']

function App () {
  return (
    <div className="App">
      <Counter backgroundColor={colors[0]} foregroundColor="#ffffff" id={0}/>
      <Counter backgroundColor={colors[1]} foregroundColor="#ffffff" id={1}/>
      <Counter backgroundColor={colors[2]} foregroundColor="#ffffff" id={2}/>
      <Counter backgroundColor={colors[3]} foregroundColor="#ffffff" id={3}/>
      <Counter backgroundColor={colors[4]} foregroundColor="#ffffff" id={4}/>
      <Counter backgroundColor={colors[5]} foregroundColor="#ffffff" id={5}/>
    </div>
  )
}

export default App
