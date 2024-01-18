import React from 'react'
import Header from './Header.jsx'
import MainContent from './MainContent.jsx'

function App() {
  return (
    <>
      <Header balance='921.48' />
      <MainContent
        thisMonth='478.33'
        compareLastMonth='+2.4%' />
    </>
  )
}

export default App
